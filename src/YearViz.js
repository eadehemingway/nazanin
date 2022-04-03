import { useEffect, useState } from "react";
import styled from "styled-components";
import { max_articles, processData, processed_data } from "./process_data";
import { getFill, getColumn } from "./getFill";

import * as d3 from "d3";
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear";
import isLeapYear from "dayjs/plugin/isLeapYear";
import { getDayJsYear } from "./utils";
dayjs().format();
dayjs.extend(dayOfYear);
dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear);
export const columns = 7;

export function getStartDayIndex(year){
    const dayjs_year = getDayJsYear(year);
    const column_index = new Date(dayjs_year.dayOfYear(1)).getDay();
    const start_day_index =  column_index > 0? column_index - 1: 6; // cos it starts on sunday
    return start_day_index;
}
export function YearViz({ year, index }){
    const year_padding = 100;
    const days = ["M", "T", "W", "T", "F", "S", "S"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const box_size = 10;
    const y_padding = 150;

    useEffect(()=>{
        processData(year);
        createYear(year, year_padding * (index + 1));
    }, []);




    function createYear(year, x_padding){
        const start_day_index = getStartDayIndex(year);
        const group = d3.select("svg").append("g").attr("class", `group-${year}`).attr("transform", `translate(${x_padding}, ${y_padding})`);
        const month_dividers = [];


        function getRow(i){
            const offset_index = i + start_day_index;
            const row = Math.floor(offset_index / columns);
            return row;
        }

        function getMonthIndex (day_num){
            const dayjs_year = getDayJsYear(year);
            return new Date(dayjs_year.dayOfYear(day_num + 1)).getMonth();
        }

        function getX(i){
            return i * box_size;
        }
        function getY(i){
            return i * box_size;
        }

        group.selectAll("rect")
            .data(processed_data)
            .enter()
            .append("rect")
            .attr("width", box_size)
            .attr("height", box_size)
            .attr("x", (d,i) => {
                const col_index = getColumn(i, year);
                return getX(col_index);
            })
            .attr("y", (d,i)=> {
                const row_index = getRow(i);
                return getY(row_index);
            })
            .attr("stroke", "#333")
            .attr("fill", (d,i) =>{
                return getFill(d, i, "articles");

            })
            .each((d,i)=>{
                // get info for divider lines
                const col = getColumn(i, year);
                const first_sqaure_in_row = col === 0;
                if (first_sqaure_in_row){
                    const month_index_at_start_of_row = getMonthIndex(i);
                    const month_index_at_end_of_row = getMonthIndex(i + 6);
                    const month_index_of_next_row = getMonthIndex(i+7);
                    const is_multi_month_row = month_index_at_start_of_row !== month_index_at_end_of_row; // i.e. the row is different month at start than at end
                    const is_final_full_row = month_index_at_start_of_row !== month_index_of_next_row;
                    const row = getRow(i);

                    if (is_multi_month_row){
                        const y = (row + 1) * box_size; // the +1 is so that it draws at the bottom of the row

                        let last_day_col = 1;
                        let month_index_of_col = getMonthIndex(last_day_col + i);
                        while (month_index_of_col === month_index_at_start_of_row){
                            last_day_col ++;
                            month_index_of_col = getMonthIndex(last_day_col + i);
                        }
                        const last_col = getColumn(last_day_col + i, year);
                        const x = getX(last_col); // the minus one is so that it draws on left of the col...

                        month_dividers.push({ x, y });
                    } else if (is_final_full_row){
                        const y = getY(row + 1);// the +1 is so that it draws at the bottom of the row
                        month_dividers.push({ y });

                    }

                }
            });


        group.selectAll(".day-labels")
            .data(days)
            .enter()
            .append("text")
            .attr("class", "day-labels")
            .text(d=> d)
            .attr("x", (d, i) => getX(i))
            .attr("y",  - 15)
            .attr("font-size", "10px");

        group.append("text").text(year).attr("x", 0).attr("y", - 50);


        group.selectAll("path")
            .data(month_dividers)
            .enter()
            .append("path")
            .attr("d", (d)=> constructMonthDividerPaths(d.x, d.y))
            .attr("stroke-width", 2)
            .attr("stroke", "#333")
            .attr("fill", "none");

        group.selectAll(".month-labels")
            .data(months)
            .enter()
            .append("text")
            .text(d=> d)
            .attr("x", -20)
            .attr("y", (d,i) => (i * (4.4 * box_size)) + 30)
            .attr("font-size", "10px");

    }

    function constructMonthDividerPaths(x_two_and_three, y_one_and_two){
        const x_one = 0;
        const x_four = box_size * columns;
        if (x_two_and_three){
            const y_three_and_four = y_one_and_two - box_size;
            return `M${x_one} ${y_one_and_two} L${x_two_and_three} ${y_one_and_two} L${x_two_and_three} ${y_three_and_four} L${x_four} ${y_three_and_four}`;
        } else return `M${x_one} ${y_one_and_two} L${x_four} ${y_one_and_two}`; // if there is only a y we just draw a straight line across
    }

    return null;
}


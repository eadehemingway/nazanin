import * as d3 from "d3";
import { useCallback, useEffect, useMemo } from "react";
import { getYearData } from "../services/getDataYear";
import { getColumn , getRow, getX, getY, getIsMonthInRange } from "../services/utils";
import { getMonthDividerCoords } from "../services/getMonthDividerCoords";
import { getMonthDividerPaths } from "../services/getMonthDividerPaths";
import { BOX_SIZE, COLUMN_WIDTH, SPACE_FOR_TOP_LABELS, SPACE_FOR_LEFT_LABELS, YEAR_GUTTER } from "../services/utils";

const MONTH_DIVIDER_COLOR = "#666";
const DAY_STROKE_COLOR = "#333";
const DAY_COLOR = "#000";

export function YearViz({ year, index }){
    const month_dividers = useMemo(()=> [], []);
    const data = useMemo(()=>{
        return  getYearData(year);
    }, [year]);


    const drawYear = useCallback(()=>{
        const x_padding = SPACE_FOR_LEFT_LABELS + (COLUMN_WIDTH * index) + (YEAR_GUTTER * (index + 1));
        const group = d3.select("svg")
            .append("g")
            .attr("class", `group-${year}`)
            .attr("transform", `translate(${x_padding}, ${SPACE_FOR_TOP_LABELS})`);

        group.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("width", BOX_SIZE)
            .attr("height", BOX_SIZE)
            .attr("x", (_,i) => {
                const col_index = getColumn(i, year);
                return getX(col_index);
            })
            .attr("y", (_,i)=> {
                const row_index = getRow(i, year);
                return getY(row_index);
            })
            .attr("stroke", (d)=>  d.is_in_range ? DAY_STROKE_COLOR : "transparent")
            .attr("stroke-width", 0.5)
            .attr("fill", "transparent")
            .transition()
            .attr("fill", (d,i) =>  d.is_in_range ? DAY_COLOR : "transparent")
            .each((_,i)=>{
                const col = getColumn(i, year);
                const first_sqaure_in_row = col === 0;
                if (first_sqaure_in_row){
                    const month_divider_coords = getMonthDividerCoords(i, year);
                    if (month_divider_coords) month_dividers.push(month_divider_coords);
                }
            });

    }, [data, index, month_dividers, year]);

    const drawYearLabel = useCallback(()=>{
        d3.select(`.group-${year}`)
            .append("text")
            .text(year)
            .attr("x", 0)
            .attr("y", -(SPACE_FOR_TOP_LABELS - 10));

    }, [year]);

    const drawDayLabels = useCallback(()=>{
        const DAYS = ["M", "T", "W", "T", "F", "S", "S"];
        d3.select(`.group-${year}`)
            .selectAll(".day-labels")
            .data(DAYS)
            .enter()
            .append("text")
            .attr("class", "day-labels")
            .attr("opacity", "0.5")
            .text(d=> d)
            .attr("x", (d, i) => getX(i))
            .attr("y",  - 15)
            .attr("font-size", "10px");

    }, [year]);

    const drawMonthDividers = useCallback(()=>{
        d3.select(`.group-${year}`)
            .selectAll(".month-dividers")
            .data(month_dividers)
            .enter()
            .append("path")
            .attr("class", "month-dividers")
            .attr("d", (d)=> {
                return getMonthDividerPaths(d.x, d.y);})
            .attr("stroke-width", 0.5)
            .attr("stroke", (d, i)=> {
                const is_month_in_range = getIsMonthInRange(year, i);
                return is_month_in_range ? MONTH_DIVIDER_COLOR : "transparent";
            })
            .attr("fill", "none");

    }, [month_dividers, year]);

    useEffect(()=> {
        if (!data.length) return;
        drawYear();
        drawMonthDividers();
        drawDayLabels();
        drawYearLabel();
    }, [data, drawDayLabels, drawYear, drawMonthDividers, drawYearLabel]);

    return null;
}




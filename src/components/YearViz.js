import * as d3 from "d3";
import { useCallback, useEffect, useMemo, useState } from "react";
import { processData } from "../services/process_data";
import { getColumn , getRow, getX, getY } from "../services/utils";
import { getMonthDividerCoords } from "../services/getMonthDividerCoords";
import { getMonthDividerPaths } from "../services/getMonthDividerPaths";
import { BOX_SIZE } from "../data/CONSTANTS.js";

export function YearViz({ year, index, layer, stage }){
    const [data, setData] = useState([]);
    const month_dividers = useMemo(()=> [], []);

    useEffect(()=>{
        const processed_data = processData(year);
        setData(processed_data);
    }, [year]);

    const drawYear = useCallback(()=>{
        const year_padding = 100;
        const Y_PADDING = 150;
        const x_padding = year_padding * (index + 1);
        const group = d3.select("svg")
            .append("g")
            .attr("class", `group-${year}`)
            .attr("transform", `translate(${x_padding}, ${Y_PADDING})`);

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
            .attr("stroke", "#333")
            .attr("fill", "transparent")
            .transition()
            .delay((d,i)=> Math.random() * 5000)
            .attr("stroke-opacity", 1)
            .attr("fill", (d,i) => d.colors[layer][stage])
            .each((_,i)=>{
                const month_divider_coords = getMonthDividerCoords(i, year);
                if (month_divider_coords) month_dividers.push(month_divider_coords);
            });

    }, [data, index, month_dividers, year]);

    const drawYearLabel = useCallback(()=>{
        d3.select(`group-${year}`)
            .append("text")
            .text(year)
            .attr("x", 0)
            .attr("y", - 50);

    }, [year]);

    const drawDayLabels = useCallback(()=>{
        const DAYS = ["M", "T", "W", "T", "F", "S", "S"];
        d3.select(`group-${year}`)
            .selectAll(".day-labels")
            .data(DAYS)
            .enter()
            .append("text")
            .attr("class", "day-labels")
            .text(d=> d)
            .attr("x", (d, i) => getX(i))
            .attr("y",  - 15)
            .attr("font-size", "10px");

    }, [year]);

    const drawMonthDividers = useCallback(()=>{
        d3.select(`group-${year}`)
            .selectAll("path")
            .data(month_dividers)
            .enter()
            .append("path")
            .attr("d", (d)=> getMonthDividerPaths(d.x, d.y))
            .attr("stroke-width", 2)
            .attr("stroke", "#333")
            .attr("fill", "none");

    }, [year, month_dividers]);

    const drawMonthLabels=useCallback(()=>{
        const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        d3.select(`group-${year}`)
            .selectAll(".month-labels")
            .data(MONTHS)
            .enter()
            .append("text")
            .text(d=> d)
            .attr("x", -20)
            .attr("y", (d,i) => (i * (4.4 * BOX_SIZE)) + 30)
            .attr("font-size", "10px");

    }, [year]);

    useEffect(()=> {
        drawYear();
        drawMonthLabels();
        drawMonthDividers();
        drawDayLabels();
        drawYearLabel();
    }, [index, year, drawYear, drawMonthDividers, drawMonthLabels, drawDayLabels, drawYearLabel]);

    return null;
}




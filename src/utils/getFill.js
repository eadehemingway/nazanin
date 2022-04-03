import * as d3 from "d3";
import { max_articles } from "./process_data";
import { getStartDayIndex } from "../utils/utils";

const min_date = new Date("April 03, 2016 00:00:00");
const max_date = new Date("March 16, 2022 00:00:00");

function getIsInRange(date, min_date, max_date){
    return date >= min_date && date <= max_date;
}

export function getColumn(i, year){
    const start_day_index = getStartDayIndex(year);
    const offset_index = i + start_day_index;
    const columns = 7;
    const col = offset_index % columns;
    return col;
}

export function getFill(d, i,  accessor){
    if (accessor === "hunger"){
        return d.hunger ? "blue": "green";
    }
    if (accessor === "articles"){
        const normalised = d.articles/max_articles;
        return d3.interpolateGreys(1-normalised);
    }
    else {
        let color = "white";
        const is_in_range = getIsInRange(d.raw_date, min_date, max_date);
        if (is_in_range) color= "#ffdab9";
        const col = getColumn(i, d.year);
        const is_weekend = col > 4;
        if (is_weekend) color =  "rgba(255,215,0, 0.2)";
        return color;
    }

}

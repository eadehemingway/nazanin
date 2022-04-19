import * as d3 from "d3";
import { getColumn } from "./utils";

const min_date = new Date("April 03, 2016 00:00:00");
const max_date = new Date("March 16, 2022 00:00:00");

function getIsInRange(date, min_date, max_date){
    return date >= min_date && date <= max_date;
}

export function getFill(d, i,  accessor){
    if (accessor==="block"){
        let color = "transparent";
        const is_in_range = getIsInRange(d.raw_date, min_date, max_date);
        if (is_in_range) color= "red";
        return color;
    }
    if (accessor === "hunger"){
        return d.hunger ? "blue": "green";
    }
    if (accessor === "articles"){
        const max_articles = 5;
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

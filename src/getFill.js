import * as d3 from "d3";
import { max_articles } from "./process_data";



const min_date = new Date("April 03, 2016 00:00:00");
const max_date = new Date("March 16, 2022 00:00:00");
function getIsInRange(date, min_date, max_date){
    return date >= min_date && date <= max_date;
}


function getFill(d, accessor){
    if (accessor === "hunger"){
        return d.hunger ? "blue": "green";
    }
    if (accessor === "articles"){

        const normalised = d.articles/max_articles;
        return d3.interpolateGreys(1-normalised);
    }
    else {
        return "none";
        // const is_in_range = getIsInRange(d.date, min_date, max_date);
        // if (is_in_range) return "#ffdab9";

        // const col = getColumn(i);
        // const is_weekend = col > 4;
        // if (is_weekend) return "rgba(255,215,0, 0.2)";
        // return "none";
    }

}

export { getFill };
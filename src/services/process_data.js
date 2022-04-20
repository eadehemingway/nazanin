
import * as d3 from "d3";
import { lookup_articles } from "../data/lookup_articles";
import { getDayJsYear } from "./utils";
import { LAYER_NAMES, LAYERS, MIN_DATE, MAX_DATE } from "../data/CONSTANTS";
import { getLocationsFill } from "./getLocationFill";
import { getPoliticsFill } from "./getPoliticsFill";

function getDateFromIndex(year, i){
    const dayjs_year = getDayJsYear(year);
    const day = dayjs_year.dayOfYear(i);
    const date = new Date(day);
    return d3.timeFormat("%Y-%m-%d")(date);
}



function getIsInRange(date){
    return date >= MIN_DATE && date <= MAX_DATE;
}

// should run the processData function once before deployment then remove from useEffect
export function processData(year){
    const dayjs_year = getDayJsYear(year);
    const full_year = dayjs_year.isLeapYear() ? 366 : 365;
    return new Array(full_year).fill(null).map((d,i)=> {
        const date_as_string = getDateFromIndex(year, i + 1);
        const date_as_date = new Date(date_as_string);
        const colors = getColorsObj(date_as_string);

        return {
            raw_date: date_as_date,
            date: date_as_string,
            articles: lookup_articles[date_as_string] || 0,
            year,
            hunger: i % 2 === 0,
            day_index: i,
            is_in_range: getIsInRange(date_as_date),
            colors
        };
    });
}


function getColorsObj(date){
    const obj = {};
    LAYERS.forEach((lay_obj)=> {
        const layer_obj = {};
        lay_obj.text_arr.forEach((_, stage_index)=>{
            layer_obj[stage_index] = getFill(date, lay_obj.name, stage_index);
        });
        obj[lay_obj.name] = layer_obj;
    });
    return obj;
}

function getFill(date, layer, stage){
    switch (layer) {
    case LAYER_NAMES.politics:
        return getPoliticsFill(date, stage);
    case LAYER_NAMES.location:
        return getLocationsFill(date, stage);
    default:
        return "sienna";
    }
}




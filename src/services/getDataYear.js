
import * as d3 from "d3";
import { lookup_articles } from "../data/lookup_articles";
import { getDayJsYear } from "./utils";
import { LAYER_NAMES, LAYERS, MIN_DATE, MAX_DATE } from "../data/CONSTANTS";

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
export function getYearData(year){
    const dayjs_year = getDayJsYear(year);
    const full_year = dayjs_year.isLeapYear() ? 366 : 365;
    return new Array(full_year).fill(null).map((d,i)=> {
        const date_as_string = getDateFromIndex(year, i + 1);
        const date_as_date = new Date(date_as_string);
        let layer_fills = {};
        LAYERS.forEach((l)=>{
            const property_name = `${l.name}-fill`;
            let fill_value = false;
            if (l.type === "fill"){
                for (let i = 0; i < l.events.length; i++) {
                    if (fill_value) { break; }
                    const row = l.events[i];
                    fill_value = date_as_date > row.start_date && date_as_date < row.end_date;
                }

            }
            layer_fills[property_name] = fill_value;
        });

        return {
            raw_date: date_as_date,
            date: date_as_string,
            articles: lookup_articles[date_as_string] || 0,
            year,
            hunger: i % 2 === 0,
            day_index: i,
            is_in_range: getIsInRange(date_as_date),
            ...layer_fills
        };
    });
}








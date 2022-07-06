
import * as d3 from "d3";
import { lookup_articles } from "../data/lookup_articles";
import { getDayJsYear } from "./utils";
import { MIN_DATE, MAX_DATE } from "../data/CONSTANTS";
import { LAYERS } from "../data/LAYERS";

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
        let layer_descriptions = {};
        LAYERS.forEach((l)=>{
            const fill_property_name = `${l.name}-fill`;
            const description_property_name = `${l.name}-description`;
            let fill_value = false;
            let description = "";
            for (let i = 0; i < l.events.length; i++) {
                if (fill_value) { break; }
                const event = l.events[i];
                const date_gt_start = date_as_date > event.start_date;
                const date_lt_end = date_as_date <= event.end_date;
                const date_in_event = date_gt_start && date_lt_end;

                if (date_in_event) description = event.description;
                if (l.type === "fill" && date_in_event) fill_value = true;
            }


            layer_fills[fill_property_name] = fill_value;
            layer_descriptions[description_property_name] = description;
        });

        return {
            raw_date: date_as_date,
            date: date_as_string,
            articles: lookup_articles[date_as_string] || 0,
            year,
            hunger: i % 2 === 0,
            day_index: i,
            is_in_range: getIsInRange(date_as_date),
            ...layer_fills,
            ...layer_descriptions
        };
    });
}








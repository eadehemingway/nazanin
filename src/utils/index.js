import * as d3 from "d3";
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear";
import isLeapYear from "dayjs/plugin/isLeapYear";

dayjs().format();
dayjs.extend(dayOfYear);
dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear);


export function getDayJsYear(year){
    return dayjs(`${year}-01-01`);
}

export function getStartDayIndex(year){
    const dayjs_year = getDayJsYear(year);
    const column_index = new Date(dayjs_year.dayOfYear(1)).getDay();
    const start_day_index =  column_index > 0? column_index - 1: 6; // cos it starts on sunday
    return start_day_index;
}


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

export function getDateFromIndex(year, i){
    const dayjs_year = getDayJsYear(year);
    const day = dayjs_year.dayOfYear(i);
    const date = new Date(day);
    return d3.timeFormat("%Y-%m-%d")(date);
}
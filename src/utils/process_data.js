
import * as d3 from "d3";
import { lookup_articles } from "../data/lookup_articles";
import { getDayJsYear } from "./utils";

let processed_data;
const max_articles = 5;
function getDateFromIndex(year, i){
    const dayjs_year = getDayJsYear(year);
    const day = dayjs_year.dayOfYear(i);
    const date = new Date(day);
    return d3.timeFormat("%Y-%m-%d")(date);
}

function processData(year){
    const dayjs_year = getDayJsYear(year);
    const full_year = dayjs_year.isLeapYear ? 366 : 365;
    processed_data = new Array(full_year).fill(null).map((d,i)=> {
        const date = getDateFromIndex(year, i + 1);
        return {
            raw_date: new Date(date),
            date,
            articles: lookup_articles[date] || 0,
            year,
            hunger: i % 2 === 0,
            day_index: i
        };
    });


}

export { lookup_articles, max_articles, processed_data, processData };
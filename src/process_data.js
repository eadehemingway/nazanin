import { data } from "./data";
import dayjs from "dayjs";
import * as d3 from "d3";
import { lookup_articles } from "./lookup_articles";

let processed_data;
const max_articles = 5;
function getDateFromIndex(year, i){
    const dayjs_year = dayjs(`${year}-01-01`);
    const day = dayjs_year.dayOfYear(i);
    const date = new Date(day);
    return d3.timeFormat("%Y-%m-%d")(date);
}

function processData(year){
    const dayjs_year = dayjs(`${year}-01-01`);
    const full_year = dayjs_year.isLeapYear ? 366 : 365;
    processed_data = new Array(full_year).fill(null).map((d,i)=> {
        const date = getDateFromIndex(year, i + 1);

        return {
            date,
            articles: lookup_articles[date] || 0,
            hunger: i % 2 === 0
        };
    });


}

export { lookup_articles, max_articles, processed_data, processData };
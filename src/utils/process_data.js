

import { lookup_articles } from "../data/lookup_articles";
import { getDayJsYear, getDateFromIndex } from ".";


export function processData(year){
    const dayjs_year = getDayJsYear(year);
    const full_year = dayjs_year.isLeapYear ? 366 : 365;
    return new Array(full_year).fill(null).map((d,i)=> {
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

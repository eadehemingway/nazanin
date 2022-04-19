
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

export function getColumn(i, year){
    const start_day_index = getStartDayIndex(year);
    const offset_index = i + start_day_index;
    const columns = 7;
    const col = offset_index % columns;
    return col;
}

export function getStartDayIndex(year){
    const dayjs_year = getDayJsYear(year);
    const column_index = new Date(dayjs_year.dayOfYear(1)).getDay();
    const start_day_index =  column_index > 0? column_index - 1: 6; // cos it starts on sunday
    return start_day_index;
}



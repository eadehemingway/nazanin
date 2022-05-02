
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear";
import isLeapYear from "dayjs/plugin/isLeapYear";
import { DAY_COLUMNS, BOX_SIZE, MIN_DATE, MAX_DATE } from "../data/CONSTANTS";

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
    const col = offset_index % DAY_COLUMNS;
    return col;
}

function getStartDayIndex(year){
    const dayjs_year = getDayJsYear(year);
    const column_index = new Date(dayjs_year.dayOfYear(1)).getDay();
    const start_day_index =  column_index > 0? column_index - 1: 6; // cos it starts on sunday
    return start_day_index;
}


export function getRow(i, year){
    const start_day_index = getStartDayIndex(year);
    const offset_index = i + start_day_index;
    const row = Math.floor(offset_index / DAY_COLUMNS);
    return row;
}


export function getX(i){
    return i * BOX_SIZE;
}
export function getY(i){
    return i * BOX_SIZE;
}



export function getIsMonthInRange(year, month_index){
    const month_before_range = year === MIN_DATE.getFullYear() && month_index < MIN_DATE.getMonth();
    const month_after_range = year === MAX_DATE.getFullYear() && month_index > (MAX_DATE.getMonth() -1); // the minus one is cos we dont want the end divider of march
    if (month_before_range || month_after_range) return false;
    else return true;

}
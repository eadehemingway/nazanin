
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear";
import isLeapYear from "dayjs/plugin/isLeapYear";
import {
    DAY_COLUMNS,
    BOX_SIZE,
    MIN_DATE,
    MAX_DATE,
    SPACE_FOR_TOP_LABELS,
    YEAR_GUTTER,
    COLUMN_WIDTH,
} from "../data/CONSTANTS";
import { getXLeftOfYear, getXRightOfYear } from "./getDividerPaths";


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

function getRowIndexFromDate(){

}
const TOTAL_ROWS = 52;

function getNumRowsBetweenDates(start_row_index, end_row_index){
    if (!end_row_index) end_row_index = 52;
    const rows_after_end = TOTAL_ROWS - end_row_index;
    const num_rows = TOTAL_ROWS - start_row_index - rows_after_end;

    return num_rows;
}

export function getCenterArea(d){
    if (!d.start_date || !d.end_date) return { x: 0, y: 0 };

    const start_date_row_index = getRowFromDate(d.start_date);
    const rows_in_start_year = TOTAL_ROWS - start_date_row_index; // ROWS BELOW THE DIVIDER LINE
    const end_date_row_index = getRowFromDate(d.end_date);

    let row_for_label;
    let is_in_start_chunk;

    if (d.start_date.getFullYear() === d.end_date.getFullYear()){
        const num_rows = getNumRowsBetweenDates(start_date_row_index, end_date_row_index);
        row_for_label = start_date_row_index + (num_rows/2);
        is_in_start_chunk = true;
    }

    else if (rows_in_start_year > end_date_row_index){
        row_for_label = TOTAL_ROWS - (rows_in_start_year/2);
        is_in_start_chunk = true;
    }else{
        row_for_label = end_date_row_index/2;
        is_in_start_chunk = false;
    }

    const end_year = d.end_date.getFullYear();
    const start_year = d.start_date.getFullYear();

    const end_month = d.end_date.getMonth();
    const start_month = d.start_date.getMonth();

    const columns_in_chunk = Math.max(end_year - start_year, 1);
    const width_one_col = COLUMN_WIDTH + YEAR_GUTTER;
    const width_of_chunk = width_one_col * columns_in_chunk;

    const x_one = getXLeftOfYear(start_year - 2016) - YEAR_GUTTER;
    const x_three = getXRightOfYear(x_one) + YEAR_GUTTER;

    let x;
    if (is_in_start_chunk) x = x_one + (width_of_chunk/2) + BOX_SIZE;
    else  x = x_three + (width_of_chunk/2) + BOX_SIZE;


    /* if chunk is in middle and not either end*/
    if (start_year + 1 === end_year){
        if (end_month > start_month + 1){
            x = x_three;
            const left_over_end_row = TOTAL_ROWS - end_date_row_index;
            const big_chunk = TOTAL_ROWS - start_date_row_index - left_over_end_row;
            const half_of_big_chunk = big_chunk / 2;
            row_for_label = start_date_row_index + half_of_big_chunk;

        }
    }
    const y =  BOX_SIZE * row_for_label + SPACE_FOR_TOP_LABELS;

    return { y , x };
}

function getRowFromDate(date){
    if (!date) return 0;
    const index = dayjs(date).dayOfYear();
    const year = date.getFullYear();
    return getRow(index, year);
}
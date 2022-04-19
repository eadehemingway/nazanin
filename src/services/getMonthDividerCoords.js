import { BOX_SIZE } from "../data/CONSTANTS.js";
import { getDayJsYear,getColumn, getRow, getX, getY } from "./utils";

function getMonthIndex (day_num, year){
    const dayjs_year = getDayJsYear(year);
    return new Date(dayjs_year.dayOfYear(day_num + 1)).getMonth();
}

export function  getMonthDividerCoords(index, year){
    // get info for divider lines
    const col = getColumn(index, year);
    const first_sqaure_in_row = col === 0;
    if (first_sqaure_in_row){
        const month_index_at_start_of_row = getMonthIndex(index, year);
        const month_index_at_end_of_row = getMonthIndex(index + 6, year);
        const month_index_of_next_row = getMonthIndex(index+7, year);
        const is_multi_month_row = month_index_at_start_of_row !== month_index_at_end_of_row; // i.e. the row is different month at start than at end
        const is_final_full_row = month_index_at_start_of_row !== month_index_of_next_row;
        const row = getRow(index, year);

        if (is_multi_month_row){
            const y = (row + 1) * BOX_SIZE; // the +1 is so that it draws at the bottom of the row
            let last_day_col = 1;
            let month_index_of_col = getMonthIndex(last_day_col + index, year);
            while (month_index_of_col === month_index_at_start_of_row){
                last_day_col ++;
                month_index_of_col = getMonthIndex(last_day_col + index, year);
            }
            const last_col = getColumn(last_day_col + index, year);
            const x = getX(last_col); // the minus one is so that it draws on left of the col...

            return { x, y };
        } else if (is_final_full_row){
            const y = getY(row + 1);// the +1 is so that it draws at the bottom of the row
            return { y };
        }
    }

}
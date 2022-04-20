import dayjs from "dayjs";
import { BOX_SIZE } from "../data/CONSTANTS.js";
import { getDayJsYear,getColumn, getRow, getX, getY } from "./utils";

export function getDividerCoords(date){
    const year = date.getFullYear();
    const day_index = dayjs(date).dayOfYear();
    const column = getColumn(day_index, year);
    const row = getRow(day_index, year);
    const x_two = getX(column -1);
    const y_two = getY(row );
    const y_three = getY(row - 1);
    return { x_two, y_two, y_three };
}
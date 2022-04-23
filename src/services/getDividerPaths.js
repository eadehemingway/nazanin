import { BOX_SIZE, COLUMNS, TOP_PADDING, YEAR_PADDING, LAYERS } from "../data/CONSTANTS";
import dayjs from "dayjs";
import { getColumn, getRow, getX, getY } from "./utils";

export function getAllDividersInLayer(layer_name){
    const layer_data = LAYERS.find(l=> l.name === layer_name);
    const all_paths = layer_data.events.map(e=> {
        const path_from_date = constructPathFromDate(e.start_date);
        return {
            name: e.description,
            path: path_from_date
        };
    });
    return all_paths;
}
function constructPathFromDate(date){
    const coords = getDividerCoords(date);
    const year = date.getFullYear();
    const year_index = year - 2016;
    return  getDividerPaths({ ...coords, year_index });
}

function getDividerCoords(date){
    const year = date.getFullYear();
    const day_index = dayjs(date).dayOfYear();
    const column = getColumn(day_index, year);
    const row = getRow(day_index, year);
    const x_two = getX(column -1);
    const y_two = getY(row );
    const y_three = getY(row - 1);
    return { x_two, y_two, y_three };
}

function getDividerPaths({ x_two, y_two, y_three, year_index }){
    const tp = TOP_PADDING + BOX_SIZE;
    const x_one = YEAR_PADDING * (year_index + 1); // left of viz
    const x_three = x_one + BOX_SIZE * COLUMNS; // right of viz
    const y_one = tp + (52 * BOX_SIZE); // height of viz (bottom of viz)
    const y_four = tp; // top of viz
    x_two += x_one;
    y_two += tp;
    y_three += tp;
    return `M${x_one} ${y_one} L${x_one} ${y_two} L${x_two} ${y_two} L${x_two} ${y_three} L${x_three} ${y_three} L${x_three} ${y_four}`;
}




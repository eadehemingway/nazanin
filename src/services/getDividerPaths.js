import { BOX_SIZE, COLUMN_WIDTH, DAY_COLUMNS, SPACE_FOR_TOP_LABELS, SPACE_FOR_LEFT_LABELS, LAYERS, YEAR_GUTTER } from "../data/CONSTANTS";
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
    const x_one = (SPACE_FOR_LEFT_LABELS + YEAR_GUTTER + ((YEAR_GUTTER + COLUMN_WIDTH) * (year_index))) - (YEAR_GUTTER / 2); // left of viz
    x_two += x_one + BOX_SIZE + (YEAR_GUTTER / 2);
    const x_three = x_one + (BOX_SIZE * DAY_COLUMNS) + YEAR_GUTTER; // right of viz

    const y_one = SPACE_FOR_TOP_LABELS + (52 * BOX_SIZE) + BOX_SIZE; // height of viz (bottom of viz)
    y_two += SPACE_FOR_TOP_LABELS + BOX_SIZE;
    y_three += SPACE_FOR_TOP_LABELS + BOX_SIZE;
    const y_four = SPACE_FOR_TOP_LABELS; // top of viz

    return `M${x_one} ${y_one} L${x_one} ${y_two} L${x_two} ${y_two} L${x_two} ${y_three} L${x_three} ${y_three} L${x_three} ${y_four}`;
}




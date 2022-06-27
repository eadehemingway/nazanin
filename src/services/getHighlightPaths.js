import { BOX_SIZE, COLUMN_WIDTH, DAY_COLUMNS, SPACE_FOR_TOP_LABELS, SPACE_FOR_LEFT_LABELS, LAYERS, YEAR_GUTTER } from "../data/CONSTANTS";
import dayjs from "dayjs";
import { getColumn, getRow, getX, getY } from "./utils";
import { getXLeftOfYear, getXRightOfYear } from "./getDividerPaths";

export function getAllHighlightsInLayer(layer_name){
    const layer_data = LAYERS.find(l=> l.name === layer_name);
    const all_paths = layer_data.events.map(e=> {
        const path_from_date = constructHighlightPathFromDates(e.start_date, e.end_date);
        return {
            name: e.description,
            path: path_from_date
        };
    });
    return all_paths;
}

function constructHighlightPathFromDates(start_date, end_date){
    const start_date_coords = getCoordsFromDate(start_date);
    const end_date_coords = getCoordsFromDate(end_date);
    const year = start_date.getFullYear();
    const year_index = year - 2016;
    const path = getHighlightTopPath(
        start_date_coords.x_two,
        start_date_coords.y_two,
        start_date_coords.y_three,
        end_date_coords.x_two,
        end_date_coords.y_two,
        end_date_coords.y_three,
        year_index
    );

    return  path;
}


// almost complete copy of the one used for divider lines but using -3 instead of -1 (cant be arsed working out why)
function getCoordsFromDate(date){
    const year = date.getFullYear();
    const day_index = dayjs(date).dayOfYear();
    const column = getColumn(day_index, year);
    const row = getRow(day_index, year);
    const x_two = getX(column - 3); // WHY THREE...?
    const y_two = getY(row );
    const y_three = getY(row - 1);
    return { x_two, y_two, y_three };
}

function getHighlightTopPath(start_x_two, start_y_two, start_y_three, end_x_two, end_y_two, end_y_three, year_index){
    const x_one = getXLeftOfYear(year_index); ; // left of viz
    start_x_two += x_one + BOX_SIZE + (YEAR_GUTTER / 2);
    const x_three = getXRightOfYear(x_one); // right of viz

    start_y_two += SPACE_FOR_TOP_LABELS + BOX_SIZE;
    start_y_three += SPACE_FOR_TOP_LABELS + BOX_SIZE;

    end_x_two += x_one + BOX_SIZE + (YEAR_GUTTER / 2);
    end_y_two += SPACE_FOR_TOP_LABELS + BOX_SIZE;
    end_y_three += SPACE_FOR_TOP_LABELS + BOX_SIZE;

    return `M${x_one} ${start_y_two}
            L${start_x_two} ${start_y_two}
            L${start_x_two} ${start_y_three}
            L${x_three} ${start_y_three}

            L${x_three} ${end_y_three}
            L${end_x_two} ${end_y_three}
            L${end_x_two} ${end_y_two}
            L${x_one} ${end_y_two}
            Z
            `;
}





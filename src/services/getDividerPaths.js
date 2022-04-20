import { BOX_SIZE, COLUMNS, TOP_PADDING, YEAR_PADDING } from "../data/CONSTANTS";

export function getDividerPaths({ x_two, y_two, y_three, year_index }){
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




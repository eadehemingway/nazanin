import { BOX_SIZE, COLUMNS } from "../data/CONSTANTS";

export function getDividerPaths({ x_two, y_two, y_three }){
    const x_one = 0; // left of viz
    const x_three = BOX_SIZE * COLUMNS; // right of viz
    const y_one = 800; // height of viz (bottom of viz)
    const y_four = 0; // top of viz

    return `M${x_one} ${y_one} L${x_one} ${y_two} L${x_two} ${y_two} L${x_two} ${y_three} L${x_three} ${y_three} L${x_three} ${y_four}`;

}




import { BOX_SIZE, DAY_COLUMNS } from "../services/utils";

export function getMonthDividerPaths(x_two_and_three, y_one_and_two){
    const x_one = 0;
    const x_four = BOX_SIZE * DAY_COLUMNS;
    if (x_two_and_three){
        const y_three_and_four = y_one_and_two - BOX_SIZE;
        return `M${x_one} ${y_one_and_two} L${x_two_and_three} ${y_one_and_two} L${x_two_and_three} ${y_three_and_four} L${x_four} ${y_three_and_four}`;
    } else return `M${x_one} ${y_one_and_two} L${x_four} ${y_one_and_two}`; // if there is only a y we just draw a straight line across
}




import { LAYERS, LAYER_NAMES } from "../data/CONSTANTS";
import { getDividerCoords } from "./getDividerCoords";
import { getDividerPaths } from "./getDividerPaths";

export function getPoliticsDividers(stage){
    const layer_data = LAYERS.find(l=> l.name === LAYER_NAMES.politics);

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
    return  getDividerPaths(coords);
}
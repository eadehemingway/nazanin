import { LAYER_NAMES } from "../data/CONSTANTS";
import { getAllDividersInLayer } from "./getDividerPaths";

export function getPoliticsDividers(stage){
    const all_dividers = getAllDividersInLayer(LAYER_NAMES.politics);

    switch (stage) {
    case 0:
        return  [all_dividers[0]];
    case 1:
        return all_dividers;
    default:
        return [];
    }
}


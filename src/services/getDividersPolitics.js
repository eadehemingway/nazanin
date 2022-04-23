import { LAYER_NAMES } from "../data/CONSTANTS";
import { getAllDividersInLayer } from "./getDividerPaths";

export function getPoliticsDividers(stage){
    const all_dividers = getAllDividersInLayer(LAYER_NAMES.politics);
    return all_dividers;
}


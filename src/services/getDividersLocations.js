import { LAYER_NAMES } from "../data/CONSTANTS";
import { getAllDividersInLayer } from "./getDividerPaths";

export function getLocationsDividers(stage){
    const all_dividers = getAllDividersInLayer(LAYER_NAMES.location);
    return all_dividers;
}
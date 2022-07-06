import { LAYER_NAMES } from "../data/LAYERS";
import { getAllDividersInLayer } from "./getDividerPaths";

export function getForeignSecretariesDividers(stage){
    const all_dividers = getAllDividersInLayer(LAYER_NAMES.foreign_secretaries);
    return all_dividers;
    // switch (stage) {
    // case 0:
    //     return  [all_dividers[0]];
    // case 1:
    //     return all_dividers;
    // default:
    //     return [];
    // }
}
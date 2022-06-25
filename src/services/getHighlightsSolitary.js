import { LAYER_NAMES } from "../data/CONSTANTS";
import { getAllHighlightsInLayer } from "./getHighlightPaths";


export function getHighlightsSolitary(stage){
    const all_highlights = getAllHighlightsInLayer(LAYER_NAMES.solitary);
    switch (stage) {
    case 0:
        return  [all_highlights[0]];
    case 1:
        return all_highlights;
    default:
        return [];
    }
}
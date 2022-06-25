import { LAYERS, LAYER_NAMES } from "../data/CONSTANTS";
import { getLocationsDividers } from "./getDividersLocations";
import { getPoliticsDividers } from "./getDividersPolitics";

export function getDividerPathLookup(){
    const obj = {};
    LAYERS.forEach((lay_obj)=> {
        const layer_obj = {};
        lay_obj.events.forEach((_, stage_index)=>{
            layer_obj[stage_index] = getDividerPathForLayer(lay_obj, stage_index);
        });
        obj[lay_obj.name] = layer_obj;
    });
    return obj;
}


// this should have a case for every divider layer
function getDividerPathForLayer(layer, stage){

    if (layer.type === "fill") return [];

    switch (layer.name) {
    case LAYER_NAMES.location:
        return getLocationsDividers(stage);
    case LAYER_NAMES.politics:
        return getPoliticsDividers(stage);
    default:
        return [];
    }
}
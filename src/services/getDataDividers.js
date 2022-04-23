import { LAYERS, LAYER_NAMES } from "../data/CONSTANTS";
import { getPoliticsDividers } from "./getDividersPolitics";
import { getLocationsDividers } from "./getDividersLocations";

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

function getDividerPathForLayer(layer, stage){
    // if (layer.type === "fill") return [];

    switch (layer.name) {
    case LAYER_NAMES.politics:
        return getPoliticsDividers(stage);
    case LAYER_NAMES.location:
        return getLocationsDividers(stage);
    default:
        return [];
    }
}
import { LAYERS, LAYER_NAMES } from "../data/CONSTANTS";
import { getPoliticsDividers } from "./getPoliticsDividers";
import { getLocationsDividers } from "./getLocationsDividers";

export function getDividerPathLookup(){
    const obj = {};
    LAYERS.forEach((lay_obj)=> {
        const layer_obj = {};
        lay_obj.text_arr.forEach((_, stage_index)=>{
            layer_obj[stage_index] = getDividerPathForStage(lay_obj.name, stage_index);
        });
        obj[lay_obj.name] = layer_obj;
    });
    return obj;
}

function getDividerPathForStage(layer, stage){
    switch (layer) {
    case LAYER_NAMES.politics:
        return getPoliticsDividers(stage);
    case LAYER_NAMES.location:
        return getLocationsDividers(stage);
    default:
        return [{ path: null }];
    }
}
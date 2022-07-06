import { LAYERS, LAYER_NAMES } from "../data/LAYERS";
import { getLocationsDividers } from "./getDividersLocations";
import { getPrimeMinistersDividers } from "./getDividersPrimeMinisters";
import { getForeignSecretariesDividers } from "./getDividersForeignSecretaries";

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
    case LAYER_NAMES.locations:
        return getLocationsDividers(stage);
    case LAYER_NAMES.prime_ministers:
        return getPrimeMinistersDividers(stage);
    case LAYER_NAMES.foreign_secretaries:
        return getForeignSecretariesDividers(stage);
    default:
        return [];
    }
}
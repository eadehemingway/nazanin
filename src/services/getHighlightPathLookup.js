import { LAYERS, LAYER_NAMES } from "../data/LAYERS";
import { getHighlightsSolitary } from "./getHighlightsSolitary";


export function getHighlightPathLookup(){
    const obj = {};
    LAYERS.forEach((lay_obj)=> {
        const layer_obj = {};
        lay_obj.highlights?.forEach((_, stage_index)=>{
            layer_obj[stage_index] = getHighlightPathForLayer(lay_obj, stage_index);
        });

        obj[lay_obj.name] = layer_obj;
    });
    return obj;
}


// this should have a case for every layer that has highlights (can be both fill and dividor?)
function getHighlightPathForLayer(layer, stage){
    if (!layer.highlights) return [];
    switch (layer.name) {
    case LAYER_NAMES.solitary_confinement:
        return getHighlightsSolitary(stage);
    default:
        return [];
    }
}
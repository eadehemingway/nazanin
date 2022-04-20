export function getPoliticsFill(date, stage){
    switch (stage) {
    case 0:
        return getPoliticsStageOne(date);
    case 1:
        return getPoliticsStageTwo(date);
    default:
        return "sienna";
    }
}

function getPoliticsStageOne(date){
    return "pink";
}

function getPoliticsStageTwo(date){
    return "orange";
}


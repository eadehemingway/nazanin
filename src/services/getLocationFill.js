export function getLocationsFill(date, stage){
    switch (stage) {
    case 0:
        return getLocationStageOne(date);
    case 1:
        return getLocationStageTwo(date);
    case 2:
        return getLocationStageThree(date);
    default:
        return "sienna";
    }
}

function getLocationStageOne(date){
    return "pink";
}

function getLocationStageTwo(date){
    return "orange";
}

function getLocationStageThree(date){
    return "yellow";
}
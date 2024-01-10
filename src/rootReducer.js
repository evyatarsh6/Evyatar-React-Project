import {combineReducers} from "redux";
import { filterKind } from "./reducers/uiReducer/handleFilterKindReducer";
import { mapPoints } from "./reducers/uiReducer/mapReducer/mapPoints";
import { mapPinMode } from "./reducers/uiReducer/mapReducer/mapPinMode";
import { mainInput } from "./reducers/uiReducer/mainInputReducer/mainInput";
import { mapShowPointsMode } from "./reducers/uiReducer/mapReducer/mapShowPointsMode";
import { currViewInfo } from "./reducers/uiReducer/mapReducer/viewInfo";
import { currLocation } from "./reducers/uiReducer/mapReducer/mapCurrLocation";
import { tooltipStatus } from "./reducers/uiReducer/mapReducer/mapTooltipStatus";
import { updateTODOListStatus } from "./reducers/uiReducer/updateTODOListStatus";


const mapModeReducer = combineReducers({
    pinMode: mapPinMode,
    showPointsMode: mapShowPointsMode,
    tooltipStatus: tooltipStatus,
})

const mapReducer = combineReducers({
    mode: mapModeReducer,
    points: mapPoints,
    currViewInfo: currViewInfo,
    currLocation: currLocation
})

const uiReducer = combineReducers({
    updateTODOListStatus: updateTODOListStatus,
    filterKind: filterKind,
    Map : mapReducer,
    mainInput: mainInput
})


const rootReducer = combineReducers({
    UI: uiReducer,
});

export default rootReducer
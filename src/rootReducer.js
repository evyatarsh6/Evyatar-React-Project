import {combineReducers} from "redux";
import { TODOS } from "./reducers/uiReducer/handleTODOSReducer";
import { filterKind } from "./reducers/uiReducer/handleFilterKindReducer";
import { mapPoints } from "./reducers/uiReducer/mapReducer/mapPoints";
import { mapPinMode } from "./reducers/uiReducer/mapReducer/mapPinModeReducers.js/mapPinMode";
import { mainInput } from "./reducers/uiReducer/mainInputReducer/mainInput";
import { mapShowPointsMode } from "./reducers/uiReducer/mapReducer/mapShowPointsModeReducers.js/mapShowPointsMode";

const mapReducer = combineReducers({
    mode: mapModeReducer,
    points: mapPoints
})

const mapModeReducer = combineReducers({
    pinMode: mapPinMode,
    showPointsMode: mapShowPointsMode
})

const uiReducer = combineReducers({
    TODOList: TODOS,
    filterKind: filterKind,
    Map : mapReducer,
    mainInput: mainInput
})


const rootReducer = combineReducers({
    UI: uiReducer,
});

export default rootReducer
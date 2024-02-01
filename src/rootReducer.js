import {combineReducers} from "redux";
import { filterKind } from "./reducers/handleFilterKindReducer";
import { mapPoints } from "./reducers/mapReducer/mapPoints";
import { pinMode } from "./reducers/mapReducer/pinMode";
import { mainInput } from "./reducers/mainInputReducer/mainInput";
import { showPointsMode } from "./reducers/mapReducer/showPointsMode";
import { currViewInfo } from "./reducers/mapReducer/currViewInfo";
import { tooltipStatus } from "./reducers/mapReducer/tooltipStatus";
import { TODOS } from "./reducers/handleTODOSReducer";
import { formDetails } from "./reducers/formDetails";


const mapModeReducer = combineReducers({
    pinMode: pinMode,
    showPointsMode: showPointsMode,
    tooltipStatus: tooltipStatus,
})

const mapReducer = combineReducers({
    mode: mapModeReducer,
    points: mapPoints,
    currViewInfo: currViewInfo,
})


const rootReducer = combineReducers({
    TODOList: TODOS,
    formDetails: formDetails,
    filterKind: filterKind,
    Map : mapReducer,
    mainInput: mainInput
});

export default rootReducer
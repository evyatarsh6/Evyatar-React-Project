import {combineReducers} from "redux";
import { filterKind } from "./reducers/handleFilterKindReducer";
import { mapPoints } from "./reducers/mapReducer/mapPoints";
import { mapPinMode } from "./reducers/mapReducer/mapPinMode";
import { mainInput } from "./reducers/mainInputReducer/mainInput";
import { mapShowPointsMode } from "./reducers/mapReducer/mapShowPointsMode";
import { currViewInfo } from "./reducers/mapReducer/viewInfo";
import { tooltipStatus } from "./reducers/mapReducer/mapTooltipStatus";
import { TODOSIDChanges } from "./reducers/todosUpdateChanges";
import { TODOS } from "./reducers/handleTODOSReducer";
import { formDetails } from "./reducers/formDetails";


const mapModeReducer = combineReducers({
    pinMode: mapPinMode,
    showPointsMode: mapShowPointsMode,
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
    TODOSChanges : TODOSIDChanges,
    filterKind: filterKind,
    Map : mapReducer,
    mainInput: mainInput
});

export default rootReducer
import { combineReducers } from "redux"
import { filterKind } from "./reducers/filterKind"
import { points } from "./reducers/mapReducer/points"
import { pinMode } from "./reducers/mapReducer/pinMode"
import { mainInput } from "./reducers/mainInput"
import { showPointsMode } from "./reducers/mapReducer/showPointsMode"
import { currViewInfo } from "./reducers/mapReducer/currViewInfo"
import { tooltipStatus } from "./reducers/mapReducer/tooltipStatus"
import { TODOList } from "./reducers/TODOList"
import { formDetails } from "./reducers/formDetails"


const mapModeReducer = combineReducers({
    pinMode: pinMode,
    showPointsMode: showPointsMode,
    tooltipStatus: tooltipStatus,
})

const mapReducer = combineReducers({
    mode: mapModeReducer,
    points: points,
    currViewInfo: currViewInfo,
})


const rootReducer = combineReducers({
    TODOList: TODOList,
    formDetails: formDetails,
    filterKind: filterKind,
    Map: mapReducer,
    mainInput: mainInput
})

export default rootReducer

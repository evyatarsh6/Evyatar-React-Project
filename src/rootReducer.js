import {combineReducers} from "redux";
import { TODOS } from "./reducers/uiReducer/handleTODOSReducer";
import { filterKind } from "./reducers/uiReducer/handleFilterKindReducer";
import { mapPoints } from "./reducers/uiReducer/mapReducer/mapPoints";
import {mapMode} from "./reducers/uiReducer/mapReducer/mapMode";
import { inputValue } from "./reducers/uiReducer/mainInputReducer/inputValue";
import { isEmpty } from "./reducers/uiReducer/mainInputReducer/isEmpty";

const mainInputReducer = combineReducers({
    inputValue : inputValue,
    isEmpty : isEmpty
})

const mapReducer = combineReducers({
    mode: mapMode,
    points: mapPoints
})

const uiReducer = combineReducers({
    TODOList: TODOS,
    filterKind: filterKind,
    Map : mapReducer,
    mainInput: mainInputReducer
})


const rootReducer = combineReducers({
    UI: uiReducer,
});

export default rootReducer
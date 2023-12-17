import {combineReducers} from "redux";
import { TODOS } from "./reducers/uiReducer/handleTODOSReducer";
import { filterKind } from "./reducers/uiReducer/handleFilterKindReducer";
import { mapPoints } from "./reducers/uiReducer/mapReducer/mapPoints";
import {mapMode} from "./reducers/uiReducer/mapReducer/mapMode";
import { mainInput } from "./reducers/uiReducer/mainInputReducer/mainInput";

const mapReducer = combineReducers({
    mode: mapMode,
    points: mapPoints
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
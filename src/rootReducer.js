import {combineReducers} from "redux";
import { TODOS } from "./reducers/uiReducer/handleTODOSReducer";
import { filterKind } from "./reducers/uiReducer/handleFilterKindReducer";
import { mapPoints } from "./reducers/uiReducer/mapReducer/mapPoints";
import {mapMode} from "./reducers/uiReducer/mapReducer/mapMode";
const mapReducer = combineReducers({
    mode: mapMode,
    points: mapPoints
})

const uiReducer = combineReducers({
    TODOList: TODOS,
    filterKind: filterKind,
    Map : mapReducer,
})


const rootReducer = combineReducers({
    UI: uiReducer,
});

export default rootReducer
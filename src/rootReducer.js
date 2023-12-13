import {combineReducers} from "redux";
import { TODOS } from "./reducers/uiReducer/handleTODOSReducer";
import { filterKind } from "./reducers/uiReducer/handleFilterKindReducer";
import { mapPoint } from "./reducers/uiReducer/mapReducer/mapPinReducer";
import {mapMode} from "./reducers/uiReducer/mapReducer/mapModeReducer";
const mapReducer = combineReducers({
    mode: mapMode,
    points: mapPoint
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
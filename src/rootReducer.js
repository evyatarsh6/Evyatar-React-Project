import {combineReducers} from "redux";
import { TODOS } from "./reducers/uiReducer/handleTODOSReducer";
import { filterKind } from "./reducers/uiReducer/handleFilterKindReducer";
import { mapPinReducer } from "./reducers/uiReducer/mapReducer/mapPinReducer";
import { mapModeReducer } from "./reducers/uiReducer/mapReducer/mapModeReducer";

const mapReducer = combineReducers({
    mode: mapModeReducer,
    pin: mapPinReducer
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
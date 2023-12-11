import {combineReducers} from "redux";
import { TODOS } from "./reducers/uiReducer/handleTODOSReducer";
import { filterKind } from "./reducers/uiReducer/handleFilterKindReducer";
import { mapTODOActions } from "./reducers/uiReducer/handleMapReducer";


const uiReducer = combineReducers({
    TODOList: TODOS,
    filterKind: filterKind,
    mapTODOActions : mapTODOActions
})


const rootReducer = combineReducers({
    UI: uiReducer,
});

export default rootReducer
import {combineReducers} from "redux";
import { TODOS } from "./reducers/uiReducer/handleTODOSReducer";
import { filterKind } from "./reducers/uiReducer/handleFilterKindReducer";
import { map } from "./reducers/uiReducer/handleMapReducer";


const uiReducer = combineReducers({
    TODOList: TODOS,
    filterKind: filterKind,
    map: map
})

// const dataReducer = combineReducers({})



const rootReducer = combineReducers({
    UI: uiReducer,
    // Data: dataReducer
});

export default rootReducer
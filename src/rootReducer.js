import {combineReducers} from "redux";
import { TODOS } from "./reducers/uiReducer/handleTODOSReducer";
import { filterKind } from "./reducers/uiReducer/handleFilterKindReducer";


const uiReducer = combineReducers({
    TODOList: TODOS,
    filterKind: filterKind
})

// const dataReducer = combineReducers({})



const rootReducer = combineReducers({
    UI: uiReducer,
    // Data: dataReducer
});

export default rootReducer
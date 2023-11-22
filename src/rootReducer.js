import {combineReducers} from "redux";
import { TODOS } from "./reducers/uiReducer/handleTODOSReducer";
import { FilterKind } from "./reducers/uiReducer/handleFilterKindReducer";


const uiReducer = combineReducers({
    TODOList: TODOS,
    FilterKind: FilterKind
})

const dataReducer = combineReducers({})



const rootReducer = combineReducers({
    UI: uiReducer,
    Data: dataReducer
});

export default rootReducer
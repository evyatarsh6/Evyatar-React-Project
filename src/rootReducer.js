import {combineReducers} from "redux";
import { TODOS } from "./reducers/uiReducer/handleTODOSReducer";
// import { filterTODOListReducer, addTODO, editTODO } from "./reducers/uiReducer/handleTODOSReducer";


const uiReducer = combineReducers({
    TODOList: TODOS
    // shownTODOS : filterTODOListReducer,
    // addNewTODO: addTODO,
    // editExistTODO: editTODO
})

const dataReducer = combineReducers({})



const rootReducer = combineReducers({
    UI: uiReducer,
    Data: dataReducer
});

export default rootReducer
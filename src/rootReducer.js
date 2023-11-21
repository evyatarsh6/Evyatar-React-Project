import {combineReducers} from "redux";
import { filterTODOListReducer, addTODO, editTODO } from "./reducers/uiReducer/handleTODOSReducer";


const uiReducer = {
    shownTODOS : filterTODOListReducer,
    addNewTODO: addTODO,
    editExistTODO: editTODO
}
const dataReducer = {}
const sessionsReducer = {}



const rootReducer = combineReducers({
    UI: uiReducer,
    Data: dataReducer,
    sessions: sessionsReducer
});

export default rootReducer
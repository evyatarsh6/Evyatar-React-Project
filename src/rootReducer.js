import {combineReducers} from "redux";
import { filterTODOListReducer, addTODO, editTODO } from "./reducers/handleTODOSReducer";


const rootReducer = combineReducers({
    shownTODOS : filterTODOListReducer,
    addNewTODO: addTODO,
    editExistTODO: editTODO
    });

export default rootReducer
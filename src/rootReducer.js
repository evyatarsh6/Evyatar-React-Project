import {combineReducers} from "redux";
import { filterTODOListReducer, addTODO } from "./reducers/handleTODOSReducer";


const rootReducer = combineReducers( {shownTODOS : filterTODOListReducer, addNewTODO: addTODO  });

export default rootReducer
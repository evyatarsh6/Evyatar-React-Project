import {combineReducers} from "redux";
import { filterTODOListReducer } from "./reducers/handleTODOSReducer";

const rootReducer = combineReducers( {filterTODOListReducer});
// const rootReducer = combineReducers( { "shownTODOS" : filterTODOListReducer});
    // , addTODO: addTODO });

export default rootReducer
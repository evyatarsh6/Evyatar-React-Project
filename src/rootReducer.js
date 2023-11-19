import {combineReducers} from "redux";
import { addTODO, filterTODOListReducer } from "./reducers/handleTODOSReducer";

const rootReducer = combineReducers({filterShownTODOS: filterTODOListReducer, addTODO: addTODO });

export default rootReducer
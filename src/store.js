import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import thunkMiddleware from 'redux-thunk'


const composedEnhancer = applyMiddleware(thunkMiddleware)

// The store now has the ability to accept thunk functions in `dispatch`
// const store = createStore(rootReducer, composedEnhancer)

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    [...getDefaultMiddleware(), composedEnhancer],
});

export default store;
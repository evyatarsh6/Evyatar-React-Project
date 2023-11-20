import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { generatingTODOID } from "./reducers/handleAddTODOMiddleware";

// Manually create an array of middleware
const customMiddleware = [generatingTODOID];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customMiddleware),
});

export default store;













// import { configureStore, applyMiddleware  } from "@reduxjs/toolkit";
// import rootReducer from "./rootReducer";
// import { generatingTODOID } from "./reducers/handleAddTODOMiddleware";


// const store = configureStore({
//     reducer: rootReducer,
//     middleware: [...middleware, generatingTODOID]

// import thunkMiddleware from 'redux-thunk'

// const composedEnhancer = applyMiddleware(thunkMiddleware)
// const composedEnhancer = applyMiddleware(generatingTODOID)



// preloadedState : initialState
// ,
// middleware: [composedEnhancer]
// middleware: (getDefaultMiddleware) =>
// [...getDefaultMiddleware(), composedEnhancer],

// const CounterComponent = () => {
//     // useDispatch hook to get the dispatch function
//     const dispatch = useDispatch();
  
//     // useSelector hook to select the counter state from the Redux store
//     const counter = useSelector((state) => state.counter);
  
//     return (
//       <div>
//         <p>Count: {counter.count}</p>
//         <button onClick={() => dispatch(increment())}>Increment</button>
//         <button onClick={() => dispatch(decrement())}>Decrement</button>
//       </div>
//     );
//   };
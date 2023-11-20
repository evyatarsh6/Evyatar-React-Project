import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import thunkMiddleware from 'redux-thunk'

// const composedEnhancer = applyMiddleware(thunkMiddleware)

// let initialState = {"TODOS": {}}

const store = configureStore({
    reducer: rootReducer,
    // preloadedState : initialState
    // ,
    // middleware: (getDefaultMiddleware) =>
    // [...getDefaultMiddleware(), composedEnhancer],
});


export default store;








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
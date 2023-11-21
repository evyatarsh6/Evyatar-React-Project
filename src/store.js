import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
// import { generatingTODOID } from "./reducers/handleAddTODOMiddleware";

// Manually create an array of middleware
// const customMiddleware = [generatingTODOID];

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(customMiddleware),
});

export default store;
import { configureStore } from "@reduxjs/toolkit";
import { SearchReducer } from "./reducer";
// import AccountReducer from "./account-slice";

export default configureStore({
  reducer: {
    search: SearchReducer
  },
  devTools: true
});

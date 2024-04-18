import { combineReducers } from "redux";
import userSlice from "./userSlice";
import productSlice from "./productSlice";

const rootReducer = combineReducers({
  users: userSlice.reducer,
  products: productSlice.reducer,
});

export default rootReducer;

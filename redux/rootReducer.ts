import { combineReducers } from "redux";
import AuthReducer from "./slices/auth.slice";
import UserReducer from "./slices/user.slice";

const rootReducer = combineReducers({
  auth: AuthReducer,
  // user: UserReducer,
});

export default rootReducer;

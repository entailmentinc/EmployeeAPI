import { combineReducers } from "redux";
import { UserReducer } from "./UserReducer";
import { AuthReducer } from "./auth.reducer";

export default combineReducers({
  user: UserReducer,
  auth: AuthReducer
});

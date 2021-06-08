import { combineReducers } from "redux";
import { checkoutReducers } from "./checkoutReducers";
import { authReducers } from "./authReducers";
const rootReducer = combineReducers({
  checkout: checkoutReducers,
  auth: authReducers,
});

export default rootReducer;

import { combineReducers } from "redux";
import { checkoutReducers } from "./checkoutReducers";
import { authReducers } from "./authReducers";
import { coursesReducers } from "./coursesReducers";
const rootReducer = combineReducers({
  checkout: checkoutReducers,
  auth: authReducers,
  courses: coursesReducers,
});

export default rootReducer;

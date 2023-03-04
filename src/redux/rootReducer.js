import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import dynamicReducer from "./dynamicCounter/dynamicReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  dynamicCounter: dynamicReducer,
});

export default rootReducer;

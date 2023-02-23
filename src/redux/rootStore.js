import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import dynamicReducer from "./dynamicCounter/dynamicReducer";

const rootStore = combineReducers({
  counter: counterReducer,
  dynamicResucer: dynamicReducer,
});

export default rootStore;

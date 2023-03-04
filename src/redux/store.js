import { applyMiddleware, createStore } from "redux";
import counterReducer from "./counter/counterReducer";
import rootReducer from "./rootReducer";
const myLogger = (s) => (n) => (a) => {
  // it's gives the current state from store
  console.log(`state: ${JSON.stringify(s.getState().dynamicCounter.value)}`);
  // tis geves the  type and payload  of actions
  console.log(`${JSON.stringify(a)}, "action"`);
  const upcommintState = [a].reduce(rootReducer, s.getState());
  console.log(`${JSON.stringify(upcommintState)}, "upcomming state"`);
  //   return n(a);
};
const store = createStore(rootReducer, applyMiddleware(myLogger));
export default store;

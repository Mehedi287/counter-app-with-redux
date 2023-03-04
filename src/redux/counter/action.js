import { DECREMENT, INCREMENT } from "./actionTypes";
// action creactor
export const increment = () => {
  return {
    type: INCREMENT,
    payload: 1,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
    payload: 2,
  };
};

import { DDECREMENT, DINCREMENT } from "./actionsTypes";

export const dynamicIncrement = (value) => {
  return {
    type: DINCREMENT,
    payload: value,
  };
};
export const dynamicDecrement = (value) => {
  return {
    type: DDECREMENT,
    payload: value,
  };
};

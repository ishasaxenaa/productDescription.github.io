import { type } from "@testing-library/user-event/dist/type";
import { ActionTypes } from "../constants/action-types";

export const setCurrencies = (currencies) => {
  return {
    type: ActionTypes.SET_CURRENCIES,
    payload: currencies,
  };
};
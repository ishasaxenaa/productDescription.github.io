import { ActionTypes } from "../constants/action-types";

const initialState = {
  currencies: [],
};
export const currencyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CURRENCIES:
      return { ...state, currencies: payload };

    default:
      return state;
  }
};
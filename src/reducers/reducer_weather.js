import { FETCH_WEATHER } from "../actions";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_WEATHER:
      return { ...state, ...payload.data };

    default:
      return state;
  }
};

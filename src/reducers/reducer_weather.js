import { FETCH_WEATHER } from "../actions";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_WEATHER:
      console.log(state);
      return [payload.data, ...state];

    default:
      return state;
  }
};

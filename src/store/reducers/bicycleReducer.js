import {
  CREATE_BICYCLE,
  UPDATE_BICYCLE,
  DELETE_BICYCLE,
  FETCH_BICYCLE,
  FETCH_BICYCLES
} from "../actionTypes";

const initialState = { bicycles: [], bicycle: {} };

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_BICYCLE:
      return { ...state, bicycles: action.payload };
    case UPDATE_BICYCLE:
      return { ...state, bicycle: action.payload };
    case DELETE_BICYCLE:
      return { ...state, bicycle: action.payload };
    case FETCH_BICYCLE:
      return { ...state, bicycle: action.payload };
    case FETCH_BICYCLES:
      return { ...state, bicycles: action.payload };
    default:
      return state;
  }
}

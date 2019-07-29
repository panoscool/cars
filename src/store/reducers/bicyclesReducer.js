import { CREATE_BICYCLE, UPDATE_BICYCLE, DELETE_BICYCLE, FETCH_BICYCLE, FETCH_BICYCLES } from '../actions/actionTypes'

const initialState = { bicycles: [] }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BICYCLE:
      return { ...state, bicycles: action.payload }
    case FETCH_BICYCLES:
      return { ...state, bicycles: action.payload }
    default:
      return state
  }
}

export default reducer

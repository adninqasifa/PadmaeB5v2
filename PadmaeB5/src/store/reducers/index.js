// reducers/index.js
import {combineReducers} from 'redux';

const initialState = {
  counter: 0 // data: []
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) { // get from dispatch
    case 'INCREMENT':
      return {
        ...state,
        counter: action.payload
      }
    default:
      return state
    }
}

export default counterReducer;

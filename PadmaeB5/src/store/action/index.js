/*
  ==> in our component
  dispatch({type: 'ADD_POSTER', payload: []});
*/
import { SAGA } from '../types';

export function fetch_api(data = []) {
  return { type: SAGA.FETCH_REQUESTED, payload: data }
}

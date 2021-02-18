import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import { SAGA, ACTION } from '../types'

const OMDB_API = 'http://www.omdbapi.com/?i=tt3896198&apikey=7a808efc'

const fetching = () => {
  return axios({
    method: 'GET',
    url: OMDB_API
  })
    .then(({data}) => data)
    .catch(err => err.message)
}

function* gettingData() {
  yield put({type: ACTION.SET_LOADING, payload: true})
  try {
    const payload = yield call(fetching)
    yield put({ type: ACTION.SET_POSTERS, payload})
  } catch (err) {
    console.log('gettingData:', err)
  }
  yield put({type: ACTION.SET_LOADING, payload: false})
}

export default function* rootSaga() {
  yield takeLatest(SAGA.FETCH_REQUESTED, gettingData)
}

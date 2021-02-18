// store/index.js

import {createStore} from 'redux';
import reducers from './reducers/index.js';

//import createSagaMiddleware from 'redux-saga';
//import saga from './sagas';

//const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers); // cause createStore need a reducer
//sagaMiddleware.run(sagas)

export default store;

import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

import reducer from './Containers/App/reducer';
import applicationSaga from './Containers/App/saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
  routerMiddleware(browserHistory),
];

const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

store.runSaga = sagaMiddleware.run(applicationSaga);

export default store;

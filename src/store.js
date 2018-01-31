import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';

import applicationReducer from './Containers/App/reducer';
import applicationSaga from './Containers/App/saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
  routerMiddleware(browserHistory),
];

const rootReducer = combineReducers({
  applicationReducer,
  routing: routerReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

store.runSaga = sagaMiddleware.run(applicationSaga);

export default store;

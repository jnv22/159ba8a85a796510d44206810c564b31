import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';
import Routes from './routes';

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Routes history={history} />
  </Provider>,
  document.getElementById('twitter_app')
);
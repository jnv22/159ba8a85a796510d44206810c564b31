import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';
import App from './Containers/App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('twitter_app'),
);

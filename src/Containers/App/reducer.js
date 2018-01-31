import actions from './actions';
import Immutable from 'immutable';

// Patch for Immutable.js + react-router
const init = Immutable.fromJS({
  isLoggedIn: false,
  oAuthError: false,
});
// OAUTH_SUCCESS: 'app/OAUTH_SUCCESS',
// OAUTH_FAILURE: 'app/OAUTH_FAILURE',
// GET_USER_DATA: 'app/GET_USER_DATA',
// GET_TWEETS: 'app/GET_TWEETS',
// DISCONNECT: 'app/DISCONNECT',

const reducers = (state = init, action) => {
  switch (action.type) {
    case actions.types.OAUTH_SUCCESS_VERIFY:
      return state
        .set('isLoggedIn', true)
        .set('oAuthError', false)
        .set('userData', action.userData);
    case actions.types.OAUTH_FAILURE:
      return state
        .set('oAuthError', true);
    default:
      return state;
  }
};

export default reducers;

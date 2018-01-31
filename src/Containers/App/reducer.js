import Immutable from 'immutable';
import actions from './actions';

const init = Immutable.fromJS({
  isLoggedIn: false,
  oAuthError: false,
  userData: {},
  error: null,
});

const reducers = (state = init, action) => {
  switch (action.type) {
    case actions.types.OAUTH_SUCCESS_VERIFY:
      return state
        .set('isLoggedIn', true)
        .set('error', null)
        .set('userData', action.payload);
    case actions.types.OAUTH_FAILURE:
      return state
        .set('error', 'Error logging on, please try again');
    case actions.types.SAVE_TWEETS:
      return state
        .set('tweets', action.payload);
    case actions.types.DISCONNECT:
      return init;
    case actions.types.ERROR:
      return state
        .set('error', action.payload);
    default:
      return state;
  }
};

export default reducers;

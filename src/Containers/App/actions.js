const types = {
  OAUTH_SUCCESS_REDIRECT: 'app/OAUTH_SUCCESS_REDIRECT',
  OAUTH_SUCCESS_VERIFY: 'app/OAUTH_SUCCESS_VERIFY',
  OAUTH_FAILURE: 'app/OAUTH_FAILURE',
  GET_USER_DATA: 'app/GET_USER_DATA',
  GET_TWEETS: 'app/GET_TWEETS',
  SAVE_TWEETS: 'app/SAVE_TWEETS',
  DISCONNECT: 'app/DISCONNECT',
  ERROR: 'app/ERROR',
};

const template = {
  oAuthSuccessRedirect: () => ({
    type: types.OAUTH_SUCCESS_REDIRECT,
  }),
  oAuthSuccessVerify: userData => ({
    type: types.OAUTH_SUCCESS_VERIFY,
    payload: userData,
  }),
  oAuthFailure: e => ({
    type: types.OAUTH_FAILURE,
    payload: e,
  }),
  getTweets: () => ({
    type: types.GET_TWEETS,
  }),
  saveTweets: tweets => ({
    type: types.SAVE_TWEETS,
    payload: tweets,
  }),
  disconnect: () => ({
    type: types.DISCONNECT,
  }),
  error: e => ({
    type: types.ERROR,
    payload: e,
  }),
};

export default {
  types,
  template,
};

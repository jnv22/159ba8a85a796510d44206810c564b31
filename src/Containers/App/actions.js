const types = {
  OAUTH_SUCCESS_REDIRECT: 'app/OAUTH_SUCCESS_REDIRECT',
  OAUTH_SUCCESS_VERIFY: 'app/OAUTH_SUCCESS_VERIFY',
  OAUTH_FAILURE: 'app/OAUTH_FAILURE',
  GET_USER_DATA: 'app/GET_USER_DATA',
  GET_TWEETS: 'app/GET_TWEETS',
  DISCONNECT: 'app/DISCONNECT',
};

const template = {
  oAuthSuccessRedirect: () => ({
    type: types.OAUTH_SUCCESS_REDIRECT,
  }),
  oAuthSuccessVerify: userData => ({
    type: types.OAUTH_SUCCESS_VERIFY,
    userData,
  }),
  oAuthFailure: () => ({
    type: types.OAUTH_FAILURE,
  }),
  getUserData: () => ({
    type: types.GET_USER_DATA,
  }),
  getTweets: () => ({
    type: types.GET_TWEETS,
  }),
  disconnect: () => ({
    type: types.DISCONNECT,
  }),
};

export default {
  types,
  template,
};

const types = {
  OAUTH: 'app/OAUTH',
  GET_USER_DATA: 'app/GET_USER_DATA',
  GET_TWEETS: 'app/GET_TWEETS',
  DISCONNECT: 'app/DISCONNECT',
};

const actions = {
  callOAuth: () => ({
    type: types.OAUTH,
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

export default actions;

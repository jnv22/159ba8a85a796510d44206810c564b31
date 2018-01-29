const types = {
  GET_USER_DATA: 'app/GET_USER_DATA',
  GET_TWEETS: 'app/GET_TWEETS',
  DISCONNECT: 'app/DISCONNECT',
};

const template = {
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

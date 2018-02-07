import pick from 'lodash/pick';
import moment from 'moment';

import { push } from 'react-router-redux';

import { takeEvery, call, put } from 'redux-saga/effects';
import actions from './actions';
import { fetchUserData, fetchTweets, logOut } from '../../lib/api';

export function* oAuthSuccessRedirect() {
  try {
    const getUserData = yield call(fetchUserData);
    if (getUserData) {
      const userData = pick(getUserData, ['username', 'displayName', 'photos']);
      yield put(actions.template.oAuthSuccessVerify(userData));
      localStorage.setItem('userData', JSON.stringify(userData));
    } else throw new Error('Invalid Redirect');
  } catch (e) {
    yield put(actions.template.error(e));
  } finally {
    yield put(push('/'));
  }
}

export function* oAuthFailureRedirect() {
  try {
    yield put(push('/'));
  } catch (e) {
    yield put(actions.template.error(e));
  }
}

export function* retrieveTweets() {
  try {
    const getTweets = yield call(fetchTweets);
    if (getTweets) {
      const tweets = getTweets.map(tweet => ({
        id: tweet.id,
        created_at: moment(tweet.created_at).format('MMMM Do YYYY, h:mm a'),
        text: tweet.text,
      }));
      yield put(actions.template.saveTweets(tweets));
      localStorage.setItem('tweets', JSON.stringify(tweets));
    } else throw new Error('Unable to fetch Tweets');
  } catch (e) {
    yield put(actions.template.error(e));
  }
}

export function* disconnect() {
  try {
    yield call(logOut);
    localStorage.setItem('userData', null);
    localStorage.setItem('tweets', null);
  } catch (e) {
    yield put(actions.template.error(e));
  }
}

export default function* saga() {
  yield [
    takeEvery(actions.types.OAUTH_SUCCESS_REDIRECT, oAuthSuccessRedirect),
    takeEvery(actions.types.OAUTH_FAILURE, oAuthFailureRedirect),
    takeEvery(actions.types.GET_TWEETS, retrieveTweets),
    takeEvery(actions.types.DISCONNECT, disconnect),
  ];
}

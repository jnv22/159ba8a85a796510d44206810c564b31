import pick from 'lodash/pick';
import { push } from 'react-router-redux';

import { takeEvery, call, put } from 'redux-saga/effects';
import actions from './actions';
import api from '../../lib/api';

function* oAuthSuccessRedirect() {
  try {
    const getUserData = yield call(api);
    if (getUserData) {
      const userData = pick(getUserData, ['username', 'displayName', 'photos']);
      yield put(actions.template.oAuthSuccessVerify(userData));
      localStorage.setItem('userData', JSON.stringify(userData));
    } else throw 'invalid redirect';
  } catch (e) {
    yield put(actions.template.oAuthFailure());
  } finally {
    yield put(push('/'));
  }
}

export default function* saga() {
  yield [
    takeEvery(actions.types.OAUTH_SUCCESS_REDIRECT, oAuthSuccessRedirect),
  ];
}

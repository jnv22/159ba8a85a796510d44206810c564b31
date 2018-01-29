import { takeEvery, call } from 'redux-saga/effects';
import actions from './actions';
import api from '../../lib/api';

function* getUserData() {
  try {
    yield call(api);
  } catch (e) {
    console.log(e);
  }
}

export default function* saga() {
  yield [
    takeEvery(actions.types.GET_USER_DATA, getUserData),
  ];
}

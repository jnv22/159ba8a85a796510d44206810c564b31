import { takeLatest } from 'redux-saga/effects';


function* test(action) {
  try {
    yield null;
  } catch (e) {
    return null;
  }
}
function* saga() {
  yield takeLatest('test', test);
}

export default saga;

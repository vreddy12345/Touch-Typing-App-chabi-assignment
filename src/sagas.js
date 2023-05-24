import { put, takeEvery } from 'redux-saga/effects';

function* watchPracticeFinish() {
  yield takeEvery('FINISH_PRACTICE', handlePracticeFinish);
}

function* handlePracticeFinish() {
  yield put({ type: 'SHOW_RESULTS' });
}

export default function* rootSaga() {
  yield watchPracticeFinish();
}

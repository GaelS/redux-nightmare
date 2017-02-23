import {fork} from 'redux-saga/effects';
import notificationsSaga from './notifications-saga';

function* rootSaga() {
  yield fork(notificationsSaga);
};

export default rootSaga;
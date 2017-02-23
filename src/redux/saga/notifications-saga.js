import {takeEvery, put} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import {ADD_NOTIFICATION, DISPLAY_NOTIFICATION, END_NOTIFICATION, displayNotification} from '../actions';


function* manageNotifications() {
  let notifications = [];
  let visibleNotifications = 0;
  yield takeEvery(ADD_NOTIFICATION, addNotification);

  function* addNotification({value}) {
    notifications.push(value);
    if (visibleNotifications < 3) {
      yield displayNotification(notifications);
    }
  };
  function* displayNotification(value) {
    visibleNotifications = visibleNotifications + 1;
    yield put({type: DISPLAY_NOTIFICATION, value: value});
    yield delay(2000);
    notifications.shift();
    yield put({type: END_NOTIFICATION})
    visibleNotifications = visibleNotifications - 1;
  };
}

function* notificationWatcher() {
  yield manageNotifications();
};

export default notificationWatcher;
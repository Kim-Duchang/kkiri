import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import member, { memberSaga } from './member';
import tuiCalendar from './tuiCalendar';
import schedule, { scheduleSaga } from './schedule';
import calendar, { calendarSaga } from './calendar';
import album, { albumSaga } from './album';
import albums, { albumsSaga } from './albums';
import loading from './loading';
import dDay, { dDaySaga } from './dDay';

const rootReducer = combineReducers({
  auth,
  member,
  tuiCalendar,
  schedule,
  loading,
  calendar,
  album,
  albums,
  dDay,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    memberSaga(),
    scheduleSaga(),
    calendarSaga(),
    albumSaga(),
    albumsSaga(),
    dDaySaga(),
  ]);
}

export default rootReducer;

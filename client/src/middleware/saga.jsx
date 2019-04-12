// Redux Saga
import { put, takeEvery, take, call } from "redux-saga/effects";

import { eventChannel, END } from "redux-saga";

import React from "react";

// Action Constants
import * as ActionConstants from "../constants/actions";

function* getUserSaga(getUserAction: Object): Generator<any, any, any> {
/*
  try {
    if (backend.hasAdminBackend) {
      const user = yield backend.adminBackend.login(loginAction.loginInfo);
      if (user.error) {
        yield put({
          type: LOGIN_ERROR
        });
      } else {
        yield put({
          type: USER_LOGGED_IN,
          user: { ...user, loginError: false }
        });
      }
    } else {
      console.warn(genericAPIRouteMessage);
    }
  } catch(error) {
    console.log(error);
  }
  */
}

/*************************** Observers ****************************************/

export function* watchForGetUser(): Generator<any, any, any> {
  yield takeEvery(ActionConstants.GET_USER, getUserSaga);
}

export default function* rootSaga(): Generator<any, any, any> {
  yield [
    watchForGetUser()
  ];
}

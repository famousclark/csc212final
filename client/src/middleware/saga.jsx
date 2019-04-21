// Redux Saga
import { put, takeEvery, take, call, all } from "redux-saga/effects";

import { eventChannel, END } from "redux-saga";

import React from "react";

import BackendFactory from "./Backends/BackendFactory";

// Action Constants
import * as ActionConstants from "../constants/actions";

const backend = BackendFactory();

const sleep = (duration: Number): Promise => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), duration);
  });
}

function* userSaga(userAction: Object): Generator<any, any, any> {
  console.log("this fired");
  try {
    const loaded = yield backend.getUser(userAction.email);
    console.log(loaded);
    yield put({ type: ActionConstants.USER_LOADED, info: loaded });
    //yield sleep(5000);
  } catch (e) {
    console.log("error");
  }
}

function* allUsersSaga(userAction: Object): Generator<any, any, any> {
  console.log("this fired");
  try {
    const loaded = yield backend.getAllUsers();
    console.log(loaded);
    yield put({ type: ActionConstants.USERS_LOADED, info: loaded });
    //yield sleep(5000);
  } catch (e) {
    console.log("error");
  }
}

/*************************** Observers ****************************************/

export function* watchForGetUser(): Generator<any, any, any> {
  yield takeEvery(ActionConstants.GET_USER, userSaga);
}

export function* watchForGetAllUsers(): Generator<any, any, any> {
  yield takeEvery(ActionConstants.GET_ALL_USERS, allUsersSaga);
}

export default function* rootSaga(): Generator<any, any, any> {
  yield all([
    watchForGetUser(),
    watchForGetAllUsers(),
  ]);
}

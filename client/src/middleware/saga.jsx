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
    //console.log(loaded);
    yield put({ type: ActionConstants.ALL_USERS_LOADED, info: loaded });
    //yield sleep(5000);
  } catch (e) {
    console.log("error");
  }
}

function* editUserSaga(userAction: Object): Generator<any, any, any> {
  console.log("this fired");
  try {
    const edited = yield backend.editUser(userAction);
    //console.log(loaded);
    yield put({ type: ActionConstants.USER_EDITED, info: edited });
    //yield sleep(5000);
  } catch (e) {
    console.log("error");
  }
}

function* deleteUserSaga(userAction: Object): Generator<any, any, any> {
  console.log("this fired");
  try {
    const deleted = yield backend.deleteUser(userAction.email);
    //console.log(loaded);
    yield put({ type: ActionConstants.USER_DELETED, info: deleted });
    //yield sleep(5000);
  } catch (e) {
    console.log("error");
  }
}

function* addUserSaga(userAction: Object): Generator<any, any, any> {
  console.log("this fired");
  try {
    const added = yield backend.addUser(userAction);
    //console.log(loaded);
    yield put({ type: ActionConstants.USER_ADDED, info: added });
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

export function* watchForEditUser(): Generator<any, any, any> {
  yield takeEvery(ActionConstants.EDIT_USER, editUserSaga);
}

export function* watchForDeleteUser(): Generator<any, any, any> {
  yield takeEvery(ActionConstants.DELETE_USER, deleteUserSaga);
}

export function* watchForAddUser(): Generator<any, any, any> {
  yield takeEvery(ActionConstants.ADD_USER, addUserSaga);
}

/*
export function* watchForGetAllUserMeals(): Generator<any, any, any> {
  yield takeEvery(ActionConstants.GET_ALL_USER_MEALS, getAllUserMealsSaga);
}

export function* watchForGetUserMeal(): Generator<any, any, any> {
  yield takeEvery(ActionConstants.GET_USER_MEAL, getUserMealSaga);
}

export function* watchForAddUserMeal(): Generator<any, any, any> {
  yield takeEvery(ActionConstants.ADD_USER_MEAL, addUserMealSaga);
}

export function* watchForDeleteUserMeal(): Generator<any, any, any> {
  yield takeEvery(ActionConstants.DELETE_USER_MEAL, deleteUserMealSaga);
}

export function* watchForEditDPlan(): Generator<any, any, any> {
  yield takeEvery(ActionConstants.EDIT_DPLAN, editDPlanSaga);
}

export function* watchForAddSpendGoal(): Generator<any, any, any> {
  yield takeEvery(ActionConstants.ADD_SPEND_GOAL, addSpendGoalSaga);
}

export function* watchForGetAllSpendGoasl(): Generator<any, any, any> {
  yield takeEvery(ActionConstants.GET_ALL_SPEND_GOALS, getAllSpendGoalsSaga);
}

export function* watchForAddNutriGoal(): Generator<any, any, any> {
  yield takeEvery(ActionConstants.ADD_NUTRI_GOAL, addNutriGoalSaga);
}

export function* watchForGetAllNutriGoals(): Generator<any, any, any> {
  yield takeEvery(ActionConstants.GET_ALL_NUTRI_GOALS, getAllNutriGoalsSaga);
}
*/
export default function* rootSaga(): Generator<any, any, any> {
  yield all([
    watchForGetUser(),
    watchForGetAllUsers(),
    watchForEditUser(),
    watchForDeleteUser(),
    watchForAddUser(),
/*
    watchForGetAllUserMeals(),
    watchForGetUserMeal(),
    watchForAddUserMeal(),
    watchForDeleteUserMeal(),
    watchForEditDPlan(),
    watchForAddSpendGoal(),
    watchForGetAllSpendGoals(),
    watchForAddNutriGoal(),
    watchForGetAllNutriGoals(),

    watchForGetMeal(),
    watchForGetAllMeals(),
    watchForEditMeal(),
    watchForDeleteMeal(),
    watchForAddMeal(),

    watchForGetRestaurant(),
    watchForGetAllRestaurants(),
    watchForEditRestaurant(),
    watchForDeleteRestaurant(),
    watchForAddRestaurant(),

    watchForGetReviewByRestaurant(),
    watchForGetAllReviews(),
    watchForGetReviewByReview(),
    watchForAddReview()*/
  ]);
}

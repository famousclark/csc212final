// constants
import {
  GET_USER,
  USER_LOADED,
  ADD_USER,
  DELETE_USER,
  GET_MEAL,
  MEAL_LOADED,
  GET_NUTRITION,
  NUTRITION_LOADED

} from "../constants/actions";

export const addUser = (userInfo: Object): Object => {
  return {
    type: ADD_USER,
    userInfo: userInfo
  };
};

export const deleteUser = (email: string): Object => {
  return {
    type: DELETE_USER,
    email: email
  };
};

export const getUser = (email: string): Object => {
  return {
    type: GET_USER,
    email: email
  };
};

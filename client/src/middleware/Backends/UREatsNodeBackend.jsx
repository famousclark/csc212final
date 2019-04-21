
import UREatsAbstractBackend from './UREatsAbstractBackend';

import {
  GET_ALL_USERS_ENDPOINT,
  GET_USER_ENDPOINT,
  EDIT_USER_ENDPOINT,
  DELETE_USER_ENDPOINT,
  ADD_USER_ENDPOINT,

  ADD_USER_MEAL_ENDPOINT,
  DELETE_USER_MEAL_ENDPOINT,
  GET_ALL_USER_MEAL_ENDPOINT,

  EDIT_DPLAN_ENDPOINT,

  ADD_SPEND_GOAL_ENDPOINT,
  GET_ALL_SPEND_GOAL_ENDPOINT,

  ADD_NUTRI_GOAL_ENDPOINT,
  GET_ALL_NUTRI_GOAL_ENDPOINT,

  GET_ALL_MEALS_ENDPOINT,
  GET_MEAL_ENDPOINT,
  ADD_MEAL_ENDPOINT,
  EDIT_MEAL_ENDPOINT,
  DELETE_MEAL_ENDPOINT,

  GET_ALL_RESTAURANTS_ENDPOINT,
  GET_RESTAURANT_ENDPOINT,
  ADD_RESTAURANT_ENDPOINT,
  EDIT_RESTAURANT_ENDPOINT,
  DELETE_RESTAURANT_ENDPOINT
} from "../../constants/api-endpoints";

export default class UREatsNodeBackend extends UREatsAbstractBackend{
  constructor(options: Object) {
    super(options);
    //this.adminBackend = new UREatsAdminBackend();
    this.hasAdminBackend = true;
  }

  getUser(email: String): Promise {
    return this._get(GET_USER_ENDPOINT + email, {})
      .then(result => result)
      .catch(error => console.log(error));
  }

  getAllUsers(): Promise {
    return this._get(GET_ALL_USERS_ENDPOINT, {})
      .then(result => result)
      .catch(error => console.log(error));
  }

  editUser(userData: Object): Promise {
    const body = this.objToFormData(userData);
    return this._put(EDIT_USER_ENDPOINT + userData.email, body, {})
      .then(result => result)
      .catch(error => console.log(error));
  }

  deleteUser(email: String): Promise {
    return this._delete(DELETE_USER_ENDPOINT + email, {})
      .then(result => result)
      .catch(error => console.log(error));
  }
  addUser(userInfo: Object): Promise {
    const body = JSON.stringify(userInfo);
    return this._post(ADD_USER_ENDPOINT, body, {
      headers: { "Content-Type": "application/json" }
    })
      .then(result => result)
      .catch(error => console.log(error));
  }


}

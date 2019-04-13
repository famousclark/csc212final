// redux
import { combineReducers } from 'redux';

// Actions
import * as ActionConstants from '../constants/actions';

const defaultState = {
  users: [],
  meals: [],
  resturants: []
};

function UserReducer(state: Object = defaultState, action: Object) {

    switch (action.type) {

      case ActionConstants.USER_LOADED:
        return{
          ...state,
          users: action.users
        }

      case ActionConstants.MEAL_LOADED:
        return{
          ...state,
          meals: action.meals
        }

      case ActionConstants.RESTAURANT_LOADED:
        return{
          ...state,
          resturants: action.resturants
        }
      default:
        return state;
    }

}

const appReducer = combineReducers({
    user: UserReducer,
    //Food: FoodReducer
});

export default appReducer;

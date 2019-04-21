// redux
import { combineReducers } from 'redux';

// Actions
import * as ActionConstants from '../constants/actions';

const defaultState = {
  users:[{
    name: null,
    email: {
      password: null,
      date: null,
      meals: [{
        date: null,
        meal_id: null
      }],
      d_plan: {
        plan: null,
        balance: null
      },
      spend_goal: [{
        amount: null,
        effective: null,
        expires: null
      }],
      nutri_goal:[{
        calories: null,
        carbs: null,
        fiber: null,
        fat: null,
        effective: null,
        expires: null
      }],
      profile_pic: null
    }
  }] ,
  userInfo: {},
  meals: [],
  resturants: []
};

function UserReducer(state: Object = defaultState, action: Object) {

    switch (action.type) {

      case ActionConstants.USER_LOADED:
        return{
          ...state,
          userInfo: action.info
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
    //Meal: FoodReducer
});

export default appReducer;

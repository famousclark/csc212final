// redux
import { combineReducers } from 'redux';

// Actions
import * as ActionConstants from '../constants/actions';

const defaultState = {

  userInfo: {},
  mealInfo: {},
  restaurantInfo: {},
  allUserInfo: {},
  allSpendGoals: {},
  allMeals: {},
  allRestaurantsInfo: {}
};

function Reducer(state: Object = defaultState, action: Object) {

    switch (action.type) {

      case ActionConstants.USER_LOADED:
        return{
          ...state,
          userInfo: action.info
        }

      case ActionConstants.MEAL_LOADED:
        return{
          ...state,
          mealsInfo: action.info
        }

      case ActionConstants.RESTAURANT_LOADED:
        return{
          ...state,
          restaurantInfo: action.info
        }
      default:
        return state;
    }

}

const appReducer = combineReducers({
    app: Reducer,
    //Meal: FoodReducer
});

export default appReducer;

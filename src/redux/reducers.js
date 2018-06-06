import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../AppNavigator';
import { getCurrentRouteName, getActionRouteName } from '../utils';

//service reducers--------------------
const initialState = {
  queryResult: {
    data: [],
    limit: 0,
    skip: 0,
    total: 0
  },
  data: {},
  createPending: false,
  findPending: false,
  loadMorePending: false,
  getPending: false,
  isError: null,
  isFinished: false,
  isLoading: false,
  isSaving: false,
  patchPending: false,
  removePending: false,
  store: null,
  updatePending: false,
  refetch: false
};
const reducer = (service) => {
  const serviceReducer = {
    [service] : (state = initialState, action) => {
      switch (action.type) {
        case `${service ? service : action.service}_CREATE_PENDING`:
          return {...state, isSaving: true};
        case `${service ? service : action.service}_CREATE_FULFILLED`:
          return {...state, isSaving: false, isFinished: true};
        case `${service ? service : action.service}_CREATE_REJECTED`:
          return {...state, isSaving: false, isError: true};
        case `${service ? service : action.service}_FIND_PENDING`:
          return {...state, isLoading: true, findPending: true};
        case `${service ? service : action.service}_FIND_FULFILLED`:
          return {...state, isLoading: false, findPending: false, queryResult: action.payload};
        case `${service ? service : action.service}_LOADMORE_PENDING`:
          return {...state, isLoading: true, loadMorePending: true};
        case `${service ? service : action.service}_LOADMORE_FULFILLED`:
          return {
            ...state,
            isLoading: false,
            loadMorePending: false,
            queryResult: {
              ...action.payload,
              data: [...state.queryResult.data, ...action.payload.data]
            }
          }
        case `${service ? service : action.service}_SET`:
          return {...state, data: action.payload};
        default:
          return state;
      }
    }
  }

  return  serviceReducer[service]
}
//end service reducers--------------------

// nav reducers----------------------
let initialNavState = AppNavigator.router.getStateForAction(
  NavigationActions.init()
);
const firstAction = AppNavigator.router.getActionForPathAndParams('RootNavigator');

//Then calculate the state with a navigate action to the first route, sending the previous initialized state as argument
initialNavState = AppNavigator.router.getStateForAction(
  firstAction,
  initialNavState
);

const navReducer = (state = initialNavState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  const { type } = action;
  if (type === NavigationActions.NAVIGATE) {
    // Return current state if no routes have changed
    if (getActionRouteName(action) == getCurrentRouteName(state)) {
        return state;
    }
  }
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
// end nav reducers----------------------

const appReducer = combineReducers({
  settings: reducer('SETTINGS'),
  nav: navReducer,
  form: formReducer
});

export default appReducer;

import { createReactNavigationReduxMiddleware, createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

const middlewares = [];
//middlewares navigation
const reactNavigation = createReactNavigationReduxMiddleware(
  "root",
  state => state.navReducer,
);
middlewares.push(reactNavigation);

//middleware redux promise
const promise = promiseMiddleware();
middlewares.push(promise);

//middlewares logger
const logger = createLogger();
// middlewares.push(logger);

//listner navigation
const addListener = createReduxBoundAddListener("root");

export {
  middlewares,
  addListener,
};

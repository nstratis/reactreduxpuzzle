/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */

// Import the redux store features
import { createStore, applyMiddleware, compose} from 'redux';
//import thunk from 'redux-thunk';
//import createLogger from 'redux-logger';
// Import the default root reducer
import rootReducer from '../reducers';

// Configure the application store
const configureStore = defaultState => {
  // Create the application store
  const store = createStore(rootReducer, defaultState);
};

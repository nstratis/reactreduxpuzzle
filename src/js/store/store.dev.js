/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
// Import the default reducers
import rootReducer from '../reducers'
// Import the dev tools, this will only be for the development build
import DevTools from '../containers/dev.tools'

// Configure and intialize the store
const configureStore = initState => {
  // Create the new store
  const store = createStore(
  // Pass the rootReducer to the store
  rootReducer,
  // Pass the initial state as a parameter
  initState,
  // Use the compose method to set the thunk and development packages
  compose(
    applyMiddleware(thunk, createLogger()),
    DevTools.instrument()
  ))
  return store;
}

export default configureStore

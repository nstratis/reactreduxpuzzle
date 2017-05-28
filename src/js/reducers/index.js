/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
import * as types from '../constants/action.types'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  const { type, error } = action
  if (type === types.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return error
  }

  return state
}


const rootReducer = combineReducers({
  errorMessage,
  routing
})

export default rootReducer

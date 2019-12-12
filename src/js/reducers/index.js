/**
 * @copyright (c) Copyright 2019 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
import * as types from '../constants/action.types'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  //console.log('reducer:errorMessage');
  // Declare the error type and message
  const { type, error } = action
  // Determine if the error message should be reset
  if(type === types.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return error
  }
  // Return the current state
  return state
}

// Game status reducers returns the current game status
const gameStarted = (state = false, action) => {
  console.log('reducer:gameStarted', state, action);
  // Check if the action is the game started flag
  switch(action.type){
    case types.START_GAME:
      return true;
    default:
      return state;
  }
}

// Game completed reducer setting the new state to completed
const gameCompleted = (state = false, action) => {
  console.log('reducer:gameCompleted', state, action);
  // Check if the action is the game complete state
  switch(action.type){
    case types.GAME_COMPLETED:
      return true;
    default:
      return state;
  }
}

// The base UI reducer determing the state of the ui to store
// The UI prop structure for the game is
// ui:{
//   header:false
// }
const ui = (state = { header:false }, action) => {
  //console.log('reducer:ui');
  // Set the current state for the ui
  switch(action.type){
    case types.START_GAME:
      return { header: true };
    default:
      return state;
  }
}

// The base USER DATA reducer determing the current data to store
// The data structure for the game is
// data_user:{
//   userTime:0,
//   userMoves:0
// }
const user = (state = { userTime:'00:00:00', userMoves:0, difficulty:'Easy'}, action) => {
  console.log('reducer:user', state, action);
  // Set the current state for the data
  switch(action.type){
    case types.START_GAME:
      return {
        userTime: '00:00:00',
        userMoves: 0,
        difficulty: 'Easy'
      };
    case types.UPDATE_SETTINGS:
      return {
        userTime: '00:00:00',
        userMoves: 0,
        difficulty: action.val
      };
    default:
      return state;
  }
}

// The base SCORE DATA reducer determing the current data to store
// The data structure for the game is
// data_scores:[
// ]
const scores = (state = [], action) => {
  //console.log('reducer:data_scores');
  // Set the current state for the data
  switch(action.type){
    case types.SHOW_SCORES:
      return [...state, {
        username: 'John Jones',
        userMoves: 3,
        userTime: '01:43:45'
      }];
    default:
      return state;
  }
}

// Combine the data reducers
const data = combineReducers({
  user,
  scores
})

// Create the rootReducer which is the combination of the application
// reducers
const rootReducer = combineReducers({
  gameStarted,
  gameCompleted,
  ui,
  data,
  errorMessage,
  routing
})

export default rootReducer

/**
 * @copyright (c) Copyright 2019 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
// Import the action type properties
import * as types from '../constants/action.types'
import { browserHistory } from 'react-router'
import requests from '../api/requests'

// Action for the game application, these including starting the game and
// changing the state
// export const startGame = () => ({
//   type:types.START_GAME
// })

export const startGame = (path) => {
  return (dispatch) => {
    dispatch({
       type: types.START_GAME
    })
    browserHistory.push('/puzzle');
  }
};


// Save the user score to the high scores
export const updateSetting = (setting) => ({
  type: types.UPDATE_SETTINGS,
  val: setting
})


// Save the user score to the high scores
export const saveScore = (details) => ({
  type: types.SAVE_SCORE,
  userdetails: details
})

// Action stating the score data has loaded
const receivedScores = scores => ({
  type: types.RECEIVE_SCORES,
  scores: scores
})

// Load the current save scores mimicing a server api
export const getScore = () => dispatch => {
  requests.getScores(scores => {
    dispatch(receivedScores(scores))
  })
}

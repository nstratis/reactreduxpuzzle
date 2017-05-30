/*global */
/*  */
/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './js/containers/root'
import configureStore from './js/store/store'

// Initial Game State, this is the general data model for the game with a clear
// Separation between the UI States and the DATA that is stored.
const initState = {
  gameStarted:false,
  gameCompleted:false,
  ui:{
    header:false
  },
  data:{
    user:{
      username:null,
      userTime:0,
      userMoves:0,
      difficulty:'Easy'
    }
  }
}

const store = configureStore(initState)
// Synchronize the browser history with the store
const history = syncHistoryWithStore(browserHistory, store)

// Render the game by the root element
render(
  <Root store={store} history={history} />,
  document.getElementById('wrapper')
)

/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
// Import the react and react router libraries
import React from 'react'
import { Route, IndexRoute } from 'react-router'
// Import the main application container component
import App from './containers/app'
// Import the main game sections to enable routing via the /browser
import StartPage from './containers/page.start'
import SettingPage from './containers/page.settings'
import PuzzlePage from './containers/page.puzzle'
import ScoresPage from './containers/page.scores'
//import store from './store/store'


// Export the default routes for the game, these are the routes accessible
// via a url
export default (store) => {

  function gameStarted() {
    //console.log('## CHECKING GAME STARTED ##', store.getState().gameStarted);
    return store.getState().gameStarted
    //return true;
  }

  function checkStarted(nextState, replace) {
    // Check if the game has started
    if(!gameStarted()) {
      replace({ pathname:'/start' })
    }
  }

  return <Route path="/" component={App}>
    <IndexRoute component={StartPage}/>
    <Route path="/start" component={StartPage} />
    <Route path="/settings" component={SettingPage} />
    <Route path="/puzzle" component={PuzzlePage} onEnter={checkStarted} />
    <Route path="/highscores" component={ScoresPage} />
  </Route>;
}

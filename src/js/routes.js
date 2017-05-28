/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
import React from 'react'
import { Route } from 'react-router'
import App from './containers/app'
import StartPage from './containers/page.start'
import SettingPage from './containers/page.settings'

export default <Route path="/" component={App}>
  <Route path="/settings"
         component={SettingPage} />
  <Route path="/start"
         component={StartPage} />
</Route>

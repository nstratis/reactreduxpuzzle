/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
import React from 'react'
import PropTypes from 'prop-types';
import { Provider } from 'react-redux'
import routes from '../routes'
import DevTools from './dev.tools'
import { Router } from 'react-router'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes(store)} />
      <DevTools />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root

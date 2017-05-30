/**
 * @class Start
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { startGame } from '../actions'

class Start extends Component {

  static propTypes = {
    // These props are injected by the react router
    errorMessage: PropTypes.string,
    onDispatch:PropTypes.func.isRequired
  }

  /**
   * @function constructor
   * @memberof Start
   * @description The constructor function for the page Start container
   */
  constructor(){
    // All constructors require the super() to be executed
    super();
    // Set the state for the settings, no real state needed here as the state
    // update will be recieved from the redux store
    this.state = { };
    this.onClick = this.onClick.bind(this);
  }

  /**
   * @function onClick
   * @memberof Start
   * @description Handles the onClick event handler for the link start button
   */
  onClick(e){
    // Dispatch the action passing the current target name
    this.props.onDispatch();
  }

  /**
   * @function render
   * @memberof Start
   * @description Render the main Start component display
   */
  render(){
    return (
      <div id="ct-start" className="content visible">
				<p>Welcome to the AVD Puzzle Game, use your mouse to drag and drop the puzzle pieces into their correct places, see if you can get the fatest time, set the difficulty if you think it is too easy.</p>
        <a id="bt-start" className="bt-ui lrg" onClick={this.onClick}>Start Game</a>
        <br />
        <Link id="bt-closesettings" to={'/settings'} className="bt-ui">Settings</Link>
			</div>
    );
  }
}

// Map the State in the store to the props
const mapStateToProps = (state, ownProps) => {
  // Map the has started boolean to the props
  const hasStarted = state.gameStarted
  return {
    hasStarted
  }
}

// Map the store dispatch function to the props
const mapDispatchToProps = (dispatch) => {
  return {
    onDispatch:() => {
      // Dispatch the update settings action
      dispatch(startGame())
    }
  }
}

// Export and connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Start)

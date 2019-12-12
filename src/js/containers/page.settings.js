/**
 * @class Settings
 * @copyright (c) Copyright 2019 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router'
import { connect } from 'react-redux'

// Import the required display components for the settings page
import Radio from '../components/radio'
// Import the action to dispatch
import { updateSetting } from '../actions'

class Settings extends Component {

  // Set the validation for the Component props
  static propTypes = {
    // These props are injected by the react router
    errorMessage:PropTypes.string,
    onDispatch:PropTypes.func.isRequired,
    difficulty:PropTypes.string.isRequired
  }

  /**
   * @function constructor
   * @memberof Settings
   * @description The constructor function for the page settings container
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
   * @memberof Settings
   * @description Handles the onClick event handler for the radio buttons
   */
  onClick(e){
    // Dispatch the action passing the current target name
    this.props.onDispatch(e.currentTarget.value);
  }

  /**
   * @function render
   * @memberof Settings
   * @description Render the main settings component display
   */
  render(){
    return (
    	<div id="ct-settings" className="content visible">
				<h2>Game Settings</h2>
				<p>Sets the game difficulty settings, the higher the difficulty, the higher the price, note that you can only win in one difficulty level.</p>
				<div className="df-radios">
					<Radio label="Hard" onClick={this.onClick} isChecked={this.props.difficulty} />
          <Radio label="Medium" onClick={this.onClick} isChecked={this.props.difficulty} />
          <Radio label="Easy" onClick={this.onClick} isChecked={this.props.difficulty} />
				</div>
        <Link id="bt-closesettings" to={'/start'} className="bt-ui">Close Settings</Link>
			</div>
    );
  }
}

// Map the State in the store to the props
const mapStateToProps = (state, ownProps) => {
  // Map the has started boolean to the props
  const difficulty = state.data.user.difficulty
  return {
    difficulty
  }
}

// Map the store dispatch function to the props
const mapDispatchToProps = (dispatch) => {
  return {
    onDispatch:(difficulty) => {
      // Dispatch the update settings action
      dispatch(updateSetting(difficulty))
    }
  }
}

// Export the setting page connection with the state and dispatch mappings
export default connect(mapStateToProps, mapDispatchToProps)(Settings)

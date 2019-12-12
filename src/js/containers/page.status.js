/**
 * @class Status
 * @copyright (c) Copyright 2019 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Status extends Component {

  /**
   * @function render
   * @memberof Status
   * @description Render the main Status component display
   */
  render(){
    return (
			<div id="ct-status" className="content">
				<h2>Puzzle Complete</h2>
				<p>Well Done! You completed the <strong>Hard</strong> Puzzle in 00:00:00, that a great score.</p>
				<button id="bt-highscores" className="bt-ui lrg">High Scores</button>
			</div>
    );
  }
}

// Map the State in the store to the props
const mapStateToProps = (state, ownProps) => {
  // Map the has started boolean to the props
  const hasStarted = state.ui.gameStarted
  return {
    hasStarted
  }
}

// Export and connect the component to the Redux store
export default connect(mapStateToProps, { })(Status)

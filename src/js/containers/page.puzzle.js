/**
 * @class Puzzle
 * @copyright (c) Copyright 2019 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Puzzle extends Component {

  /**
   * @function render
   * @memberof Puzzle
   * @description Render the puzzle container and begin the game
   */
  render(){
    // Return the default puzzle container
    return (
			<canvas id="puzzle-container" className="content"> </canvas>
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

// Export and connect the component to the Redux store
export default connect(mapStateToProps, { })(Puzzle)

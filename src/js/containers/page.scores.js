/**
 * @class Scores
 * @copyright (c) Copyright 2019 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
import React, { Component } from 'react'
//import { Link } from 'react-router'
import { connect } from 'react-redux'

class Scores extends Component {

  /**
   * @function render
   * @memberof Scores
   * @description Render the score display container
   */
  render(){
    return (
			<div id="ct-scores" className="content">
				<p>Below are the high scores for the puzzle game, at the end of Aug 2017 the highest scores in each category will be awarded the prize.</p>
				<div className="hg-scores-grp">
					<header className="scr-hd">
						<ul className="scr-type">
							<li className="active">Hard</li><li>Medium</li><li>Easy</li>
						</ul>
						<ul className="scr-pg">
							<li>&lt;</li><li>&gt;</li>
						</ul>
					</header>
					<table className="tbl-score">
						<thead>
							<tr>
								<th>Username</th><th>Time</th><th>Moves</th>
							</tr>
						</thead>
						<tbody>
							<tr><td>Johnson Bob</td><td>12:00:43</td><td>32</td></tr>
							<tr><td>Johnson Bob</td><td>12:00:43</td><td>32</td></tr>
							<tr><td>Johnson Bob</td><td>12:00:43</td><td>32</td></tr>
							<tr><td>Johnson Bob</td><td>12:00:43</td><td>32</td></tr>
							<tr><td>Johnson Bob</td><td>12:00:43</td><td>32</td></tr>
							<tr><td>Johnson Bob</td><td>12:00:43</td><td>32</td></tr>
							<tr><td>Johnson Bob</td><td>12:00:43</td><td>32</td></tr>
							<tr><td>Johnson Bob</td><td>12:00:43</td><td>32</td></tr>
							<tr><td>Johnson Bob</td><td>12:00:43</td><td>32</td></tr>
							<tr><td>Johnson Bob</td><td>12:00:43</td><td>32</td></tr>
						</tbody>
					</table>
				</div>
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
export default connect(mapStateToProps, { })(Scores)

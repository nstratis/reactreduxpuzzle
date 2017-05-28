/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class Settings extends Component {


  onClick(e){
    console.log('Button has been clicked');
  }

  render(){
    return (
    	<div id="ct-settings" className="content visible">
				<h2>Game Settings</h2>
				<p>Sets the game difficulty settings, the higher the difficulty, the higher the price, note that you can only win in one difficulty level.</p>
				<div className="df-radios">
					<label><input type="radio" name="difficulty" value="hard" /> Hard</label>
  				<label><input type="radio" name="difficulty" value="medium" /> Medium</label>
  				<label><input type="radio" name="difficulty" value="easy" /> Easy</label>
				</div>

        <Link id="bt-closesettings" to={'/start'} className="bt-ui">Close Settings</Link>
			</div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // We need to lower case the login due to the way GitHub's API behaves.
  // Have a look at ../middleware/api.js for more details.
  const login = 'test'
  return {
    login
  }
}

export default connect(mapStateToProps, {

})(Settings)

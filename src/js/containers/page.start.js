/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class Start extends Component {

  render(){

    console.log('Rendering the page start')

    return (
      <div id="ct-start" className="content visible">
				<p>Welcome to the AVD Puzzle Game, use your mouse to drag and drop the puzzle pieces into their correct places, see if you can get the fatest time, set the difficulty if you think it is too easy.</p>
				<Link id="bt-start" className="bt-ui lrg"  to={'/puzzle'}>Start Game</Link><br />
        <Link id="bt-closesettings" to={'/settings'} className="bt-ui">Settings</Link>
			</div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // We need to lower case the login due to the way GitHub's API behaves.
  // Have a look at ../middleware/api.js for more details.
  const login = 'test1'
  return {
    login
  }
}

export default connect(mapStateToProps, {

})(Start)

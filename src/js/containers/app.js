/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

class App extends Component {

  static propTypes = {
    mode: PropTypes.string,
    children: PropTypes.node
  }

  render(){
    const { children } = this.props
    return (
      <div id="avd-puzzle-game">
        <header className="main">

        </header>
        <div className="main">
          {children}
        </div>
    		<footer className="main visible">
    			<span>&copy; AV Digital Media Ltd. All Rights Reserved</span>
    		</footer>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  mode: state.mode
})

export default connect(mapStateToProps, { })(App)

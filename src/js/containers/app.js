/**
 * @class App
 * @copyright (c) Copyright 2019 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

// Import the action to dispatch
import { startGame } from '../actions'

class App extends Component {

  // The Static props for the Component
  static propTypes = {
    // These props are injected by the react router
    errorMessage: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired
  }

  /**
   * @function componentWillMount
   * @memberof App
   * @description The lifecyle componentWillMount method executed before mounting
   */
  componentWillMount() {
    console.log('componentWillMount()', this.props)
  }

  /**
   * @function componentWillReceiveProps
   * @memberof App
   * @description The lifecyle method to determine if props are received
   */

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps()', nextProps)
  }

  /**
   * @function shouldComponentUpdate
   * @memberof App
   * @description The lifecyle shouldComponentUpdate method executed after the render
   */
  //shouldComponentUpdate(){
    //console.log('shouldComponentUpdate()');
    // Return a boolean true
    //return true;
  //}

  /**
   * @function componentWillUpdate
   * @memberof App
   * @description The lifecyle method straight after the shouldComponentUpdate
   */
  //componentWillUpdate(nextProps, nextState){
    // Return a boolean true
    //console.log('componentWillUpdate()', nextProps, nextState);
  //}

  /**
   * @function componentDidUpdate
   * @memberof App
   * @description The lifecyle didMount method executed after the render
   */
  //componentDidUpdate(prevProps, prevState){
    //console.log('componentDidUpdate()', prevProps, prevState);
  //}

  /**
   * @function componentDidMount
   * @memberof App
   * @description The lifecyle didMount method executed after the render
   */
  //componentDidMount(){
    //console.log('componentDidMount()');
  //}

  /**
   * @function componentWillUnmount
   * @memberof App
   * @description The lifecyle will unmount method
   */
  //componentWillUnmount(){
    //console.log('componentWillUnmount()');
  //}

  /**
   * @function destroy
   * @memberof App
   * @description Destroy the component
   */
  //destroy(){
    // Unmount the component from the dom
    //return ReactDOM.unmountComponentAtNode(document.getElementById(this.props.parent));
  //}

  /**
   * @function render
   * @memberof App
   * @description Render the main application component
   */
  render(){
    // Set the children to a constant
    const { children } = this.props
    return (
      <div id="avd-puzzle-game">
        <header className="main"></header>
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

// Map the State in the store to the props
const mapStateToProps = (state, ownProps) => {
  // Map the state to the props
  const errorMessage = state.errorMessage
  const path = ownProps.location.pathname.substring(1)

  return {
    errorMessage,
    path
  }
}

// Map the store dispatch function to the props
const mapDispatchToProps = (dispatch) => {
  return {
    // onClick event to handle the dispatch
    onClick: (id) => {
      dispatch(startGame(id))
    }
  }
}

// Export and connect the component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(App)

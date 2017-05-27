/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
import React, { Component } from 'react';
//import logo from '../assets/logo.svg';
import '../css/game.css';

class Game extends Component {
  render() {
    return (
      <div id="wrapper">
        <header className="main">The main Game Header</header>
        <div className="main">
          The game body container
        </div>
      </div>
    );
  }
}
export default Game;

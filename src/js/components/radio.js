/**
 * @class Radio
 * @copyright (c) Copyright 2019 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
// Import react
import React from 'react'
// Create a simple radio component with label
export default (props) => {
  // Determine if the radio item is check
  let checked = false;
  if(props.isChecked === props.label){
    // Set the checked value to true
    checked = true;
  }
  return (
    <label><input
      type="radio"
      name="difficulty"
      value={props.label}
      onChange={props.onClick}
      checked={checked} /> {props.label}</label>
  )
}

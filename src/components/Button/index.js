import React from "react";

const Button = props => (
  <button 
    type="button"
    onClick = {props.onClick}>
    {props.text}
  </button>
)

export { Button }
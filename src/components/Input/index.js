import React, { Component } from "react";

const Input = props =>(
  <input
    type="text"
    name={props.name}
    value={props.value}
    onChange={event => props.updateText(event.target.value)}
  />
)

export { Input }

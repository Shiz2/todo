import React, { Component } from "react";

export class Input extends Component {
  render() {
    return (
      <Input
      type="text"
      name={this.props.name}
      value={this.props.value}
      onChange={event => this.props.update(event.target.value)}
      />
    )
  }
}

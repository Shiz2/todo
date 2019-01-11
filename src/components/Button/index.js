import React, { Component } from "react";

export class Button extends Component {
  render() {
    return <Button
      type="button"
      onClick={this.props.onClick}>
      {this.props.text}</Button>;
  }
}

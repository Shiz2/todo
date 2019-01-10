import React, { Component } from "react";
import FormInput from "../Input"

class ToDoContainer extends Component {
    state={
      input: ''
    }

    updateInput = async value => {
      await this.setState({input: value})
    }
  render() {
    return (
      <div><FormInput
        type= "text"
        value= {this.state.input}
        update= {this.updateInput}
      />
      <h1>{this.state.input}</h1></div>
    );
  }
}

export default ToDoContainer;

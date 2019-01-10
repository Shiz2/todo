import React, { Component } from "react";
import FormInput from "../Input"

class Add extends Component {
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
      <button onClick={this.props.updateParent}> Add </button>
      </div>
    );
  }
}

export default Add;
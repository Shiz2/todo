import React, { Component } from "react";
import ReactDOM from "react-dom";

class Button extends Component {
  render() {
    return <button>Add</button>;
  }
}

ReactDOM.render(<Button />, document.getElementById("root"));
export default Button;

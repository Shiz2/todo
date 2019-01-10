import React, { Component } from "react";
import Add from "../Add"


class ToDoContainer extends Component {
    constructor(props) {
      super(props);

      this.state={
        array: ""
      };
    }

    updateArray =  value => {
      // this.setState(state => {
      //   const array = state.array.concat(value)

      //   return {
      //     array
      //   }
      // })
      this.setState({array: value})
    }
    // console.log({this.state.array})
  render() {
    console.log(this.state.array)
    return (
      <div><Add updateParent= {this.state.updateArray} />
      {this.state.array}
      </div>
    );
  }
}

export default ToDoContainer;

import React, { Component } from "react";
import { Add } from "../Add";

export class ToDoContainer extends Component {

   state = {
    todos: [],
    index: 0, 
   }

   addTodo = text => {
    if (text) {
        this.setState({
            index: this.state.index + 1, 
            todos: [...this.state.todos, {index: this.state.index, text} ]
        });
    }
   };
    render() {
        return(
        <React.Fragment>
            <Add onClick={this.addTodo}/>
        </React.Fragment>        
        )
    }
}
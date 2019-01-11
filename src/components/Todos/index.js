import React, { Component } from "react";
import { Todo } from "../Todo";

export class Todos extends Component {
  render() {
    if (this.props.todos.length > 0) {
      return this.props.search_results.length > 0 ? (
        this.props.search_results.map(todo => (
          <li key={todo.index}>
            <Todo
              todo={todo}
              onClick={() => this.props.removeTodo(todo.index)}
              markComplete={this.props.markComplete}
              markInComplete={this.props.markInComplete}
            />
          </li>
        ))
      ) : (
        <p>No results found</p>
      );
    }
    return <p>No Todos to complete</p>;
  }
}

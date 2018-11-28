import React, { Component } from "react";
import { render } from "react-dom";
import uuid from "uuid";

import Navbar from "./components/Navbar";
import Addtodo from "./components/Addtodo";
import TodoList from "./components/TodoList";
import SearchList from "./components/searchList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          content: "Sample todo",
          isClicked: false,
          isInfoClicked: false,
          styles: "card-panel light-blue lighten-3"
        }
      ],
      dummyTodos: ""
    };
  }
  addNewTodo = todo => {
    todo.id = uuid.v4();
    todo.styles = "card-panel light-blue lighten-3";
    const todos = [...this.state.todos, todo];
    this.setState({ todos: todos });
  };

  handleDelete = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todos });
  };

  handleUpdate = (obj, id) => {
    const todos = this.state.todos.filter(todo => {
      if (todo.id == id) {
        todo.isClicked = obj.isClicked;
      }
    });
  };

  handleSubmit = (obj, id) => {
    const todos = this.state.todos.filter(todo => {
      if (todo.id == id) {
        todo.isClicked = obj.isClicked;
        todo.content = obj.newContent;
      }
    });
  };

  handleInfo = (obj, id) => {
    const todos = this.state.todos.filter(todo => {
      if (todo.id == id) {
        todo.isInfoClicked = obj.isInfoClicked;
      }
    });
  };

  handleStyle = (obj, id) => {
    const todos = this.state.todos.filter(todo => {
      if (todo.id == id) {
        todo.styles = obj;
      }
    });
  };

  handleSearch = val => {
    let i = true;
    if (val.length !== 0) {
      const h = this.state.todos;
      this.setState({ dummyTodos: h });
      const todos = this.state.todos.filter(todo => {
        return todo.content == val;
      });
      this.setState({ todos });
    } else {
      const h = this.state.dummyTodos;
      this.setState({ todos: h });
    }
    console.log(this.state.dummyTodos);
  };

  render() {
    return (
      <div>
        <Navbar />
        <Addtodo addNewTodo={this.addNewTodo} />
        <hr />

        <TodoList
          todos={this.state.todos}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
          handleSubmit={this.handleSubmit}
          handleInfo={this.handleInfo}
          handleStyle={this.handleStyle}
        />
      </div>
    );
  }
}

export default App;

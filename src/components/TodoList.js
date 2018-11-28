import React, { Component } from "react";
import { render } from "react-dom";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      isClicked: true,
      newContent: "",
      isInfoClicked: true
    };
  }

  handleUpdate = id => {
    let val = this.state.isClicked ? false : true;
    this.setState({ isClicked: val });
    this.props.handleUpdate(this.state, id);
  };

  handleChange = e => {
    let val = e.target.value;
    this.setState({ newContent: val });
  };

  handleSubmit = id => {
    let val = this.state.isClicked ? false : true;
    this.setState({ isClicked: val });
    this.props.handleSubmit(this.state, id);
  };

  handleInfo = id => {
    let val = this.state.isInfoClicked ? false : true;
    this.setState({ isInfoClicked: val });
    this.props.handleInfo(this.state, id);
  };

  handleStyles = (e, id) => {
    let s = "";
    if (e.target.id == 1) {
      this.setState({ styles: "card-panel red lighten-3" });
      s = "card-panel red lighten-3";
    } else if (e.target.id == 2) {
      this.setState({ styles: "card-panel yellow lighten-3" });
      s = "card-panel yellow lighten-3";
    } else if (e.target.id == 3) {
      this.setState({ styles: "card-panel light-blue lighten-3" });
      s = "card-panel light-blue lighten-3";
    }
    this.props.handleStyle(s, id);
  };

  render() {
    const todos = this.props.todos;
    const todoItems = <todos className="length" /> ? (
      todos.map(todo => {
        return (
          <div draggable key={todo.id} className={todo.styles}>
            {todo.isClicked ? (
              <span className="">
                <form onSubmit={() => this.handleSubmit(todo.id)}>
                  <input
                    defaultValue={todo.content}
                    onChange={this.handleChange}
                  />
                </form>
              </span>
            ) : (
              <span key={todo.id}>{todo.content}</span>
            )}{" "}
            {<span>&nbsp;</span>}
            {todo.isInfoClicked ? (
              <span>
                <div id="dropdown1">
                  <ul
                    className="dropdown"
                    onClick={e => this.handleStyles(e, todo.id)}
                  >
                    <li id="1">High</li>
                    <li id="2">Medium</li>
                    <li id="3">Low</li>
                  </ul>
                </div>
              </span>
            ) : null}
            <i
              onClick={() => this.props.handleDelete(todo.id)}
              className="material-icons right"
            >
              delete
            </i>
            <i
              onClick={() => this.handleUpdate(todo.id)}
              className="material-icons right"
            >
              update
            </i>
            <i
              onClick={() => this.handleInfo(todo.id)}
              className="material-icons right"
              data-target="dropdown1"
            >
              info
            </i>
          </div>
        );
      })
    ) : (
      <p>No items available!</p>
    );

    return <div className="TodoList container">{todoItems}</div>;
  }
}

export default TodoList;

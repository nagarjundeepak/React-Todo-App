import React, { Component } from "react";
import { render } from "react-dom";

class Addtodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  handleChange = e => {
    let val = e.target.value;
    this.setState({ content: val });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewTodo(this.state);
    this.setState({ content: "" });
  };

  render() {
    return (
      <div className="container input-field">
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo</label>
          <input
            value={this.state.content}
            type="text"
            placeholder="type and click enter to submit"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Addtodo;

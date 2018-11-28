import React, { Component } from "react";
import { render } from "react-dom";

class SerachList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  handleChange = e => {
    let val = e.target.value;
    this.props.handleSearch(val);
  };

  render() {
    return (
      <div className="container">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search"
              required
              onChange={this.handleChange}
            />
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    );
  }
}

export default SerachList;

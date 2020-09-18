import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
class AppBar extends Component {
  render() {
    return (
      <div className="app-bar flex jcsb">
        <p onClick={() => this.props.history.push("/")}>Todo List</p>


      </div>
    );
  }
}

export default withRouter(AppBar);
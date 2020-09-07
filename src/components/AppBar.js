import React, { Component } from 'react';
import { ReactComponent as InfoIcon } from "../assets/info-circle.svg";
import { withRouter } from "react-router-dom";
class AppBar extends Component {
  render() {
    return (
      <div className="app-bar flex jcsb">
        <p onClick={() => this.props.history.push("/")}>Todo List</p>

        <div className="icon-btn"
          onClick={() => this.props.history.push("/info")}
        >
          <InfoIcon style={{ width: 20, fill: "#fff" }} />
        </div>
      </div>
    );
  }
}

export default withRouter(AppBar);
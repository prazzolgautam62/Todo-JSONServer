import React, { Component } from 'react';

class AddTodo extends Component {

  state = {
    title: "",
    description: "",
  };

  handleInputChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <div className="add-todo">
          <h1>Add Todo</h1>
          <input
            type="text"
            placeholder="Todo Title"
            name="title"
            onChange={(e) => this.handleInputChange(e)}
          />
          <br />
          <textarea
            placeholder="Description"
            name="description"
            onChange={this.handleInputChange}
          />
          <br />
          <br />
          <div className="todo-add-btn center">
            <button
              className="btn"
              onClick={() => {
                this.props.handleAdd(this.state.title, this.state.description);
                this.props.history.push("/");
              }}
            >
              Add Todo
        </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTodo;
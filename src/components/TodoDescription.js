import React, { Component } from 'react';
import './../assets/App.css';

class TodoDescription extends Component {

  state = {
    todo: null,
  }

  getItemFromId = () => {
    const id = parseInt(this.props.match.params.id);
    const item = this.props.state.todos.filter(item => item.id === id)[0];
    if (item) this.setState({ ...this.state, todo: item });
  };

  componentDidMount() {
    this.getItemFromId();
  }

  render() {
    return (
      <div>
        {this.state.todo && (
          <React.Fragment>
            <p className="todo-head">{this.state.todo.title}</p>
            <p className="todo-desc">{this.state.todo.description}</p>
          </React.Fragment>
        )}

        {(!this.state.todo || !this.state.todo.description) && (
          <p className="text-red">No description found</p>
        )}



      </div>
    );
  }
}

export default TodoDescription;
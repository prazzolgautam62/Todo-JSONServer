import React, { Component } from 'react';

//Combination of Individual Todo items

class TodoListScreen extends Component {
  render() {
    return (
      <div>
        <div className="todo-add-btn">
          <button
            className="btn"
            onClick={() => this.props.history.push("add_todo")}
          >

            Add Todo
          </button>
        </div>
        <br />
        {this.props.state.todos.map((item) => {
          return (
            <TodoItem
              key={item.id}
              handelDelete={this.props.handelDel}
              toggleComplete={this.props.toggleComplete}
              history={this.props.history}
              {...item}
            />
          );
        })}
      </div>
    );
  }
}

//Individual Todo.

class TodoItem extends React.Component {

  handleClick = () => {
    this.props.history.push("/todo/" + this.props.id);
  };

  render() {
    return (
      <div className="todo-list-item">
        <div className="flex jcsb ci">
          <input
            type="checkbox"
            checked={this.props.completed}
            onChange={() => this.props.toggleComplete(this.props.id)}
          />
          <div className="content" onClick={this.handleClick}>
            {/* Title field */}
            <div
              className="title"
              style={{
                textDecoration: this.props.completed ? "line-through" : "none",
              }}
            >
              {this.props.title}
            </div>

            {/* Date Field */}

            <div className="created">Created: {this.props.created}</div>
          </div>
          <div
            className="btn-del"
            onClick={() => this.props.handelDelete(this.props.id)}
          >
            x
              </div>
        </div>
      </div>
    );
  }
}

export default TodoListScreen;
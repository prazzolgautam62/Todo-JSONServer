import React from 'react';
import './assets/App.css';
import AppBar from './components/AppBar';
import { Switch, Route } from 'react-router-dom';
import TodoListScreen from './components/TodoListScreen';
import AddTodo from './components/AddTodo';
import TodoDescription from './components/TodoDescription';
import InfoPage from './components/InfoPage';

class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Wash Hand",
        created: "Sun Sep 06 2020",
        description: "Wash hands, be safe from CORONA",
        completed: true,
      },

      {
        id: 2,
        title: "Sanitize Hand",
        created: "Mon Sep 07 2020",
        description: "Sanitize hands, be safe from CORONA",
        completed: false,
      },
    ]
  }

  handleAdd = (title, description) => {
    const date = new Date().toDateString();
    const newTodo = {
      id: this.state.todos.length + 1,
      title: title,
      description: description,
      created: date,
      completed: false,
    };
    this.setState(({ ...this.state, todos: [...this.state.todos, newTodo] }))
  }

  handelDelete = (id) => {
    const clonedState = [...this.state.todos];
    const removedState = clonedState.filter((item) => {
      return item.id !== id;
    });

    this.setState({ ...this.state, todos: removedState });
  }

  handelCompleteTodo = (id) => {
    const clonedState = [...this.state.todos];
    const removedState = clonedState.map((item) => {
      if (item.id === id) return { ...item, completed: !item.completed };
      return item;
    });

    this.setState({ ...this.state, todos: removedState });
  }

  render() {
    return (
      <div className="app">
        <AppBar />
        <br />
        <Switch>
          <Route
            path="/"
            exact
            render={props =>
              <TodoListScreen
                handelDel={this.handelDelete}
                state={this.state}{...props}
                toggleComplete={this.handelCompleteTodo}
              />
            }
          />
          <Route path="/add_todo" exact render={(props) => (<AddTodo {...props} handleAdd={this.handleAdd}
          />
          )}
          />

          <Route path="/todo/:id"
            exact
            render={props => <TodoDescription {...props} state={this.state} />}
          />

          <Route path="/info" component={InfoPage} />

        </Switch>


      </div>
    );
  }
}


export default App;

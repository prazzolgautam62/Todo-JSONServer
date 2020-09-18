import React from 'react';
import './assets/App.css';
import AppBar from './components/AppBar';
import { Switch, Route } from 'react-router-dom';
import TodoListScreen from './components/TodoListScreen';
import AddTodo from './components/AddTodo';
import TodoDescription from './components/TodoDescription';

function App() {


  return (
    <div className="app">
      <AppBar />
      <br />
      <Switch>
        <Route
          path="/"
          exact
          render={props =>
            <TodoListScreen />
          }
        />
        <Route path="/add_todo" exact render={(props) => (<AddTodo {...props}
        />
        )}
        />

        <Route path="/todo/:id"
          exact
          component={props => (<TodoDescription />)}
        />

      </Switch>


    </div>
  );

}


export default App;

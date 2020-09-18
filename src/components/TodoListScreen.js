import React, { useState, useEffect } from 'react';
import { useHistory, withRouter } from "react-router-dom";
import axios from 'axios';
import AddTodo from './AddTodo';
const server = 'http://localhost:5000';

function TodoListScreen(props) {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getTodos();

  }, [])

  const getTodos = async () => {
    let res = await axios.get(`${server}/todos`);
    setTodoList(res.data);
  }

  //Checkbox

  const toggleComplete = async (id, completed) => {
    let res = await axios.patch(`${server}/todos/${id}`, { completed: !completed });
    const updatedList = todoList.map(todo => {
      if (todo.id === res.data.id) {
        return res.data;
      }

      return todo;
    });

    setTodoList(updatedList);
  }

  //Delete operation
  const handleDelete = async (id) => {
    await axios.delete(`${server}/todos/${id}`);
    const newList = todoList.filter((item) => {
      return item.id !== id;
    })

    setTodoList(newList);
  }

  //Open/handles Individual Todo

  const handleClick = (id) => {
    props.history.push("/todo/" + id);
  }

  return (
    <div>
      <div className="todo-add-btn">
        <a href="/add_todo"><button
          className="btn"
          onClick={() => <AddTodo />}
        >

          Add Todo
          </button></a>
      </div>
      <br />

      {todoList.map((todo, key) => (
        <div className="todo-list-item" key={key}
        >

          <div className="flex jcsb ci" >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id, todo.completed)}

            />
            <div className="content" onClick=
              {() => handleClick(todo.id)}


            >
              {/* Title field */}
              <div
                className="title"
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </div>

              {/* Date Field */}

              <div className="created">Created:{todo.created}</div>
            </div>
            <div
              className="btn-del"
              onClick={() => handleDelete(todo.id)}
            >
              x
              </div>
          </div>


        </div>
      ))}

    </div>
  );

}


export default withRouter(TodoListScreen);
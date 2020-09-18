import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
const server = 'http://localhost:5000';


function AddTodo() {

  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState([]);
  let history = useHistory();

  //Handles the input change in input field.
  const handleInputChange = (e) => {
    e.persist();
    setTodo((todo) => ({
      ...todo,
      [e.target.name]: e.target.value
    }));
  }

  //Get todos
  const getTodoList = async () => {
    let res = await axios.get(`${server}/todos`)
    setTodoList([...res.data])
  }

  //Handles the submit operation
  const handleSubmit = async (e) => {
    const date = new Date().toDateString();
    await axios.post(`${server}/todos`, { ...todo, created: date, completed: false });
    getTodoList();
    setTodo();
    history.push("/");

  }



  return (
    <div>
      <div className="add-todo">
        <h1>Add Todo</h1>
        <input
          type="text"
          placeholder="Todo Title"
          name="title"
          onChange={handleInputChange}
        />
        <br />
        <textarea
          placeholder="Description"
          name="discription"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <div className="todo-add-btn center">
          <button
            className="btn"
            onClick={() => {
              handleSubmit();

            }}
          >
            Add Todo
        </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../assets/App.css';
import { withRouter } from 'react-router-dom';
const server = 'http://localhost:5000';


function TodoDescription(props) {
  const [newTodo, setNewTodo] = useState([]);


  useEffect(() => {
    getItemById();
  }, [])


  const getItemById = async () => {
    const id = parseInt(+props.match.params.id);
    const item = await axios.get(`${server}/todos/${id}`)
    if (item) setNewTodo(item.data);
  }

  return (
    <div>
      {newTodo && (
        <React.Fragment>
          <p className="todo-head">{newTodo.title}</p>
          <p className="todo-desc">
            {newTodo.discription}
          </p>
        </React.Fragment>
      )}

      {(!newTodo || !newTodo.discription) && (
        <p className="text-red">No description found</p>
      )}



    </div>
  );

}

export default withRouter(TodoDescription);
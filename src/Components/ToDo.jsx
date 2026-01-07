import React, { useEffect, useState } from 'react'

function ToDo() {
  const [todo, setTodo] = useState([]);

  const handleTodo = (id) => {
    alert(`Add or update task with ID: ${id}`);

  }

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json()).then((res) => setTodo(res.todos));
  }, [])
  return (


    <div className="col-md-5 col-lg-7 mx-auto mt-3">
      <div className="card shadow-sm">
        <div className="card-header bg-dark text-white">
          <h5 className="mb-2">My ToDo</h5>
          <div className="card-body">
            <ul className="list-group mb-1">
              {
                todo.map((todos) => {
                  return(
                    <li key={todo.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {todos.todo}
                    {todos.completed ? (
                      <span className="badge bg-success">Done</span>)
                      : (
                        <span className="badge bg-warning text-dark">Pending</span>  
                      )}
                  </li>                  )
                })
              }
            </ul>


            <button onClick={() => handleTodo(0)} className="btn btn-danger w-100">Add Task</button>
          </div>
        </div>
      </div>
    </div>


  )
}

export default ToDo
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      setTodos([...todos, { text: task, completed: false }]);
      setTask("");
    }
  };

  const handleToggleTask = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h1 className="card-title text-center mb-5">ToDo List for Trello</h1>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a new task"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={handleAddTask}
                >
                
                  <i className="fas fa-plus" ></i> Add New Task
                </button>
              </div>
              <ul className="list-group">
                {todos.map((todo, index) => (
                  <li
                    key={index}
                    className={`list-group-item d-flex justify-content-between align-items-center ${
                      todo.completed ? "completed" : ""
                    }`}
                  >
                    <span
                      onClick={() => handleToggleTask(index)}
                      style={{ cursor: "pointer", textDecoration: todo.completed ? "line-through" : "none" }}
                    >
                      {todo.text}
                    </span>
                    <div>
                      <button
                        className={`btn btn-sm ${
                          todo.completed ? "btn-warning" : "btn-primary"
                        } me-2`}
                        onClick={() => handleToggleTask(index)}
                      >
                        <i className={`fas ${todo.completed ? "fa-undo" : "fa-check"}`}></i>
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDeleteTask(index)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

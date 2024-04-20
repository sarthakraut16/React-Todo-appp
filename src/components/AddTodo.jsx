import { useState } from "react";
import styles from "./AddTodo.module.css"

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
      <div className={styles.todoBox}>
        <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Todo Here"
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input type="date" value={dueDate} onChange={handleDueDateChange} />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success kg-button"
              onClick={handleAddButtonClicked}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      </div>
  );
}

export default AddTodo;

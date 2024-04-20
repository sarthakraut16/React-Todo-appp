import styles from './TodoItem.module.css';

function TodoItem({ todoName, todoDate, onDelete }) {
  return (
    <div className={styles.container}>
      <div className={`row kg-row ${styles.row}`}>
        <div className= {`col-6 ${styles.todoname}`}>{todoName}</div>
        <div className={`col-4 ${styles.tododate}`}>{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => {
              onDelete(todoName);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

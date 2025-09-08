import React from "react";
import styles from "./Todo.module.scss";

const TodoApp = () => {
  const [value, setValue] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    const todo = {
      text: value,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, todo]);
    setValue("");
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.todoApp}>
          <div className={styles.todoHeader}>
            <form onSubmit={handleSubmit} className={styles.addTodoForm}>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                id="todoInput"
                placeholder="Thêm công việc mới..."
              />
              <button className={styles.addBtn}>
                <span>+</span>
                Thêm
              </button>
            </form>
          </div>

          <div className={styles.todoListContainer}>
            <div className={styles.todoList}>
              {todos.map((todo, index) => (
                <div key={index} className={styles.todoItem}>
                  <p
                    className={`${todo.completed ? `${styles.completed}` : ""}`}
                  >
                    {todo.text}
                  </p>
                  <div className={styles.todoControls}>
                    <button
                      onClick={() =>
                        setTodos((prevTodos) =>
                          prevTodos.filter((_, i) => i !== index)
                        )
                      }
                      className={styles.deleteBtn}
                    >
                      Xoá
                    </button>
                    <button
                      className={`${
                        todo.completed ? `${styles.completed}` : ""
                      } ${styles.completeBtn}`}
                      onClick={() =>
                        setTodos((prevTodos) =>
                          prevTodos.map((todo, i) =>
                            i === index
                              ? { ...todo, completed: !todo.completed }
                              : todo
                          )
                        )
                      }
                    >
                      Hoàn thành
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {todos.length === 0 && (
              <div className={styles.emptyState}>
                <h3>Chưa có công việc nào</h3>
                <p>Hãy thêm công việc đầu tiên của bạn!</p>
              </div>
            )}
          </div>

          <div className={styles.todoTasks}>
            <div className={styles.tasksGrid}>
              <div className={styles.taskCard}>
                <div className={styles.taskInfo}>
                  <span className={styles.taskNumber} id="totalTodos">
                    {totalCount}
                  </span>
                  <span className={styles.taskLabel}>Tổng công việc</span>
                </div>
              </div>

              <div className={styles.taskCard}>
                <div className={styles.taskInfo}>
                  <span className={styles.taskNumber}>{completedCount}</span>
                  <span className={styles.taskLabel}>
                    Số công việc đã hoàn thành
                  </span>
                </div>
              </div>

              <div className={styles.taskCard}>
                <div className={styles.taskInfo}>
                  <span className={styles.taskNumber} id="totalTodos">
                    {totalCount - completedCount}
                  </span>
                  <span className={styles.taskLabel}>Còn lại</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoApp;

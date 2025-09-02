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
      <div className="container">
        <div className="todo-app">
          <div className="todo-header">
            <form onSubmit={handleSubmit} className="add-todo-form">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                id="todoInput"
                placeholder="Thêm công việc mới..."
              />
              <button className="add-btn">
                <span>+</span>
                Thêm
              </button>
            </form>
          </div>

          <div className="todo-list-container">
            <div className="todo-list">
              {todos.map((todo, index) => (
                <div key={index} className={`todo-item `}>
                  <p className={`${todo.completed ? "completed" : ""}`}>
                    {todo.text}
                  </p>
                  <div className="todo-controls">
                    <button
                      onClick={() =>
                        setTodos((prevTodos) =>
                          prevTodos.filter((_, i) => i !== index)
                        )
                      }
                      className="delete-btn"
                    >
                      Xoá
                    </button>
                    <button
                      className={`${
                        todo.completed ? "completed" : ""
                      } complete-btn`}
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
              <div className="empty-state">
                <h3>Chưa có công việc nào</h3>
                <p>Hãy thêm công việc đầu tiên của bạn!</p>
              </div>
            )}
          </div>

          <div className="todo-tasks">
            <div className="tasks-grid">
              <div className="task-card">
                <div className="task-info">
                  <span className="task-number" id="totalTodos">
                    {totalCount}
                  </span>
                  <span className="task-label">Tổng công việc</span>
                </div>
              </div>

              <div className="task-card">
                <div className="task-info">
                  <span className="task-number">{completedCount}</span>
                  <span className="task-label">Số công việc đã hoàn thành</span>
                </div>
              </div>

              <div className="task-card">
                <div className="task-info">
                  <span className="task-number" id="totalTodos">
                    {totalCount - completedCount}
                  </span>
                  <span className="task-label">Còn lại</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const inner = <>
    <TodoApp />
</>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(inner);
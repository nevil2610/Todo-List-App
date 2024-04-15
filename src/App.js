import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoActions";

function App() {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;
  console.log(Todo,"hello")

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
    setTodo(" ");
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List App in Redux</h2>
        <form>
          <input
            placeholder="Enter a Todo"
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: "none",
              fontSize: 20,
            }}
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button
          onClick={handleSubmit}
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20,
            }}
          >
            Go
          </button>
        </form>
        <ul className="allTodos">
          {todos &&
            todos.map((t) => (
              <li key={t.id} className="singleTodo">
                <span className="todoText">{t.todo}</span>
                <button
                  style={{
                    padding: 10,
                    borderRadius: 25,
                    border: "1px solid white",
                    color: "white",
                    backgroundColor: "orangered",
                  }}
                  onClick={() => removeHandler(t)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

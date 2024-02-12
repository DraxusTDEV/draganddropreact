import { useState } from "react";

const initialTodos = [
  {
    id: 1,
    text: "Aprender React.js",
  },
  {
    id: 2,
    text: "Aprender JS",
  },
  {
    id: 3,
    text: "Aprender Vue.js",
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <>
      <h1>Drag and Drop</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
};

export default App;

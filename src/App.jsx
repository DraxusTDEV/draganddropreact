import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

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
      <DragDropContext>
        <h1>Drag and Drop</h1>
        <Droppable>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.text}</li>
            ))}
          </ul>
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default App;

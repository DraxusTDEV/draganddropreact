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

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    console.log(result);

    const startIndex = result.source.index;
    const endIndex = result.destination.index;

    const copyArray = [...todos];
    const [reorderItem] = copyArray.splice(startIndex, 1);
    //console.log(reorderItem);

    copyArray.splice(endIndex, 0, reorderItem);
    console.log(copyArray);

    setTodos(copyArray);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <h1>Drag and Drop</h1>
        <Droppable droppableId="todos">
          {(dropableProvider) => (
            <ul
              ref={dropableProvider.innerRef}
              {...dropableProvider.droppableProps}
            >
              {todos.map((todo, index) => (
                <Draggable
                  key={todo.id}
                  draggableId={`${todo.id}`}
                  index={index}
                >
                  {(draggableProvider) => (
                    <li
                      ref={draggableProvider.innerRef}
                      {...draggableProvider.draggableProps}
                      {...draggableProvider.dragHandleProps}
                    >
                      {todo.text}
                    </li>
                  )}
                </Draggable>
              ))}
              {dropableProvider.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default App;

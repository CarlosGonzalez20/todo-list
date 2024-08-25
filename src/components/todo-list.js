import React from "react"; // Importa la biblioteca React para usar JSX y otros métodos de React.
import Todo from "./todo"; // Importa el componente Todo desde el archivo "todo.js".

// Componente funcional TodoList que recibe dos props: "todos" (una lista de tareas) y "deleteTodo" (una función para eliminar una tarea).
const TodoList = ({ todos, deleteTodo }) => {
  return (
    // Contenedor div con la clase CSS "list".
    <div className="list">
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} task={todo.task} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList; // Exporta el componente TodoList para que pueda ser utilizado en otros archivos.

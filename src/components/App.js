import react from "react"; // Importa la biblioteca React para crear componentes de React.
import TodoList from "./todo-list"; // Importa el componente TodoList que muestra la lista de tareas.
import Add from "./add"; // Importa el componente Add que proporciona la funcionalidad para agregar nuevas tareas.
import "./styles/app.css"; // Importa el archivo de estilos CSS para aplicar estilos personalizados.

// Componente de clase App que extiende react.Component, lo que le permite tener un estado y métodos del ciclo de vida.
class App extends react.Component {
    // Define el estado inicial del componente con una propiedad "todos" como un array vacío.
    state = {
        todos: []
    };

    // Método para agregar una nueva tarea al estado.
    addTodo = (task) => {
        const newTodo = {
            task, // La tarea a agregar.
            id: Date.now() // Genera un identificador único basado en la marca de tiempo actual.
        };
        // Actualiza el estado agregando la nueva tarea al array de "todos" existente.
        this.setState({
            todos: [...this.state.todos, newTodo] // Crea un nuevo array con los elementos existentes y añade el nuevo.
        });
    };

    // Método para eliminar una tarea del estado utilizando su identificador.
    deleteTodo = (id) => {
        // Filtra las tareas para eliminar la que coincide con el "id" proporcionado.
        const filteredTodos = this.state.todos.filter(todo => todo.id !== id);
        // Actualiza el estado con el nuevo array de tareas filtradas.
        this.setState({ todos: filteredTodos });
    };

    // Método render para renderizar el componente App.
    render() {
        return (
            // Contenedor principal del componente con la clase CSS "App".
            <div className="App">
                <h1>To-do List</h1>
                <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
                <Add addTodo={this.addTodo} />
            </div>
        );
    }
}

export default App; // Exporta el componente App para que pueda ser utilizado en otros archivos.

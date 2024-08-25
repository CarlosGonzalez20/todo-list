import React, { Component } from "react"; // Importa la biblioteca React y el componente base "Component" para crear componentes de clase.
import "./styles/add.css"; // Importa el archivo de estilos CSS para aplicar estilos personalizados al componente Add.

// Componente de clase Add que permite al usuario agregar nuevas tareas a la lista de tareas.
class Add extends Component {
    // Define el estado inicial del componente con una propiedad "task" como una cadena vacía.
    state = {
        task: ""
    };

    // Método para manejar los cambios en el campo de entrada de texto.
    handleChange = (event) => {
        // Actualiza el estado con el valor actual del campo de entrada.
        this.setState({
            task: event.target.value
        });
    };

    // Método para manejar el envío del formulario.
    handleSubmit = (event) => {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario que es recargar la página.
        this.props.addTodo(this.state.task); // Llama a la función "addTodo" pasada como prop desde el componente padre (App) para agregar la nueva tarea.
        this.setState({ task: "" }); // Reinicia el campo de entrada de texto a una cadena vacía después de agregar la tarea.
    };

    // Método render para renderizar el componente Add.
    render() {
        return (
            // Contenedor div con la clase CSS "addItem" para estilizar el formulario de agregar tareas.
            <div className="addItem">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.task}
                    />
                    <button type="submit" className="addButton">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="addIcon"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
                            />
                        </svg>
                    </button>
                </form>
            </div>
        );
    }
}

export default Add; // Exporta el componente Add para que pueda ser utilizado en otros archivos.

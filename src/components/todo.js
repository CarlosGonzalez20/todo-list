import React from "react";// Importa la biblioteca React para crear componentes de React.
import "./styles/todo.css";// Importa el archivo de estilos CSS para aplicar estilos personalizados.

// Componente funcional Todo que recibe tres props: "id" (identificador de la tarea), "task" (descripci�n de la tarea) y "deleteTodo" (funci�n para eliminar la tarea).
const Todo = ({id, task, deleteTodo}) => {
    return (
        // Contenedor div con la clase CSS "item" para estilizar cada tarea.
        <div className="item">
            <li>
                {task}  <button onClick={() => deleteTodo(id)} className="deleteButton">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="deleteIcon">
                        <path fill="#90caf9" d="M14.149,18.39l2.66,24.823C16.917,44.229,17.775,45,18.797,45h18.405	c1.022,0,1.879-0.771,1.988-1.787l2.661-24.823c0.077-0.72-0.487-1.348-1.211-1.348H15.36C14.636,17.043,14.072,17.67,14.149,18.39z"></path><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M36.249,29.839L38,13.5"></path><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M10.608,19.171l2.009,18.755c0.218,2.033,1.933,3.574,3.977,3.574h14.811c2.044,0,3.759-1.541,3.977-3.574l0.373-3.48"></path><line x1="7.5" x2="40.5" y1="13.5" y2="13.5" fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></line><line x1="20.5" x2="27.5" y1="5.5" y2="5.5" fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></line><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M10,13.5l2.813-4.219c0.741-1.113,1.99-1.781,3.328-1.781H31.86c1.337,0,2.586,0.668,3.328,1.781L38,13.5"></path>
                    </svg>
                </button>
            </li>
        </div>
    )
}
export default Todo // Exporta el componente Todo para que pueda ser utilizado en otros archivos.
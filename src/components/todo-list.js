import React from "react";
import Todo from "./todo";

const TodoList = ({todos}) => {
    return(
        <div className="list">
            <ul>
                {todos.map(todo => (<Todo id={todo.id} task={todo.task} />))}
            </ul>
        </div>
    )
}

export default TodoList;
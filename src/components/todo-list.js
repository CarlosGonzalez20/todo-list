import React from "react";
import Todo from "./todo";

const TodoList = ({todos, deleteTodo}) => {
    return(
        <div className="list">
            <ul>
                {todos.map(todo => (<Todo id={todo.id} task={todo.task} deleteTodo={deleteTodo}/>))}
            </ul>
        </div>
    )
}

export default TodoList;
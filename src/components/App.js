import react from "react";
import TodoList from "./todo-list";
import Add from "./add";
import "./styles/app.css";

class App extends react.Component {

    state = {
        todos: []
    };

    addTodo = (task) => {
        const newTodo = {
            task, id: Date.now()
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    deleteTodo = (id) => {
        const filteredTodos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({todos: filteredTodos});
    }

    render() {
        return (
            <div className="App">
                <h1>To-do List</h1>
                <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                <Add addTodo={this.addTodo}/>
            </div>
        );
    }
}

export default App;
import react from "react";
import TodoList from "./todo-list";
import Add from "./add";

class App extends react.Component {

    state = {
        todos: [
            {
                id: 1,
                title: "Todo 1",
                completed: false
            },
            {
                id: 2,
                title: "Todo 2",
                completed: false
            },
            {
                id: 3,
                title: "Todo 3",
                completed: false
            }
        ]
    };

    render() {
        return (
            <div className="App">
                <h1>To-do List</h1>
                <TodoList todos={this.state.todos}/>
                <Add />
            </div>
        );
    }
}

export default App;
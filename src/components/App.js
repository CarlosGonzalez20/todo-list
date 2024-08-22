import react from "react";
import TodoList from "./todo-list";
import Add from "./add";

class App extends react.Component {

    state = {
        todos: []
    };

    render() {
        return (
            <div className="App">
                <h1>To-do List</h1>
                {/* <TodoList todos={this.state.todos}/>
                <Add /> */}
            </div>
        );
    }
}

export default App;
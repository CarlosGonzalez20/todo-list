import React, {Component} from "react";

class Add extends Component {
    state = {
        task: ""
    };
    handleChange = (event) => {
        this.setState({
            task: event.target.value
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.task);
        this.setState({task: ""});
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.task}></input>
                    <button type ="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default Add
import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super();
        this.state = {
            todoText: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    handleInputChange(e) {
        this.setState({
            todoText: e.target.value
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" value={this.state.todoText} onChange={this.handleInputChange.bind(this)}/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default TodoForm; 
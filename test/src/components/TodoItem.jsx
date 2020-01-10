import React, { Component } from 'react';
class TodoItem extends Component {
    constructor(props){
        super();
    }

    render() {
        let { todo } = this.props;
        let isCompleted = todo.isCompleted;
        return(
            <li style={{"textDecoration": todo.isCompleted ? 'line-through' : ''}}>
                {todo.text}
                <button onClick={() => this.handleDelete(todo.text)}>X</button>
                <button disabled={isCompleted} onClick={() => this.handleDone(todo.text)}>Done</button>
            </li>
        );
    }
} 

export default TodoItem;
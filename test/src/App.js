import React, { Component } from 'react';
import './App.css';
import TodosList from './components/TodosList';
import TodoForm from './components/TodoForm';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super();
    }

    render() {
        console.log(this.props.todos);
        return(
            <div className="App">
            <h1>ToDo App</h1>
            <TodosList/>
            <TodoForm/>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    todos: state.todoList
});

export default connect (mapStateToProps)(App);
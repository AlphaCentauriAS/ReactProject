import { combineReducers } from "redux";
import  todoList  from "./todo_reducer";

const todoApp = combineReducers({
    todoList
})

export default todoApp;
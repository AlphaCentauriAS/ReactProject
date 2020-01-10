import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "../constants/";
import { v4 } from 'node-uuid';

const todoList = (state = [], action, newState) => {
    switch (action.type) {
        case ADD_TODO:
        return [{
            text: action.text,
            todoID: v4(),
            completed: false
        }, ...state]
    
    return state;
    default:
    return state;
    }
}

export default todoList;
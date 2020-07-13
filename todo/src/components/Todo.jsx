import React from 'react';
import { DELETE_TODO, TOGGLE_TODO } from '../reducers/todoReducer';

const Todo = ({ todo, dispatch }) => {

    const handleToggle = e => {
        e.preventDefault();
        dispatch({ type: TOGGLE_TODO, payload: todo.id });
    };

    const handleDelete = e => {
        e.preventDefault();
        dispatch({ type: DELETE_TODO, payload: todo.id });
    };

    return (
        <div className='Todo'>
            <div className='todo-name'>{todo.item}</div>
            <button className='todo-check'>Complete</button>
            <button onClick={handleDelete} className='todo-delete'>Delete</button>
        </div>
    );
};

export default Todo;
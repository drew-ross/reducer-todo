import React, { useState, useEffect } from 'react';
import { DELETE_TODO, TOGGLE_TODO } from '../reducers/todoReducer';

const Todo = ({ todo, dispatch }) => {

    const [completedClassName, setCompletedClassName] = useState('Todo');

    useEffect(() => {
        if (todo.completed) {
            setCompletedClassName('Todo completed');
        } else {
            setCompletedClassName('Todo');
        }
    }, [todo.completed]);

    const handleToggle = e => {
        e.preventDefault();
        dispatch({ type: TOGGLE_TODO, payload: todo.id });
    };

    const handleDelete = e => {
        e.preventDefault();
        dispatch({ type: DELETE_TODO, payload: todo.id });
    };

    return (
        <div className={completedClassName}>
            <div className='todo-name'>{todo.item}</div>
            <button className='todo-toggle-btn' onClick={handleToggle}>Complete</button>
            <button className='todo-delete-btn' onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Todo;
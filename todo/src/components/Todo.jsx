import React, { useState, useEffect } from 'react';
import { DELETE_TODO, TOGGLE_TODO } from '../reducers/todoReducer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faUndo } from '@fortawesome/free-solid-svg-icons';

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
            <div className='todo-name'><p>{todo.item}</p></div>
            <button className='todo-toggle-btn' onClick={handleToggle}>
                {todo.completed ?
                    (
                        <>
                            <span className='hidden'>Un-Complete</span>
                            <FontAwesomeIcon icon={faUndo} />
                        </>
                    ) : (
                        <>
                            <span className='hidden'>Complete</span>
                            <FontAwesomeIcon icon={faCheck} />
                        </>
                    )}
            </button>
            <button className='todo-delete-btn' onClick={handleDelete}>
                <span className='hidden'>Delete</span>
                <FontAwesomeIcon icon={faTrash} />
                </button>
        </div>
    );
};

export default Todo;
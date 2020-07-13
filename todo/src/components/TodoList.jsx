import React, { useReducer, useState } from 'react';
import Todo from './Todo';
import { todoReducer, todoInitialState, CREATE_TODO, CLEAR_COMPLETED } from '../reducers/todoReducer';

const TodoList = () => {

    const [state, dispatch] = useReducer(todoReducer, todoInitialState);
    const [formValue, setFormValue] = useState('');

    const handleChanges = e => {
        setFormValue(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (formValue !== '') {
            dispatch({ type: CREATE_TODO, payload: formValue.trim() });
            setFormValue('');
        }
    };

    const handleClearCompleted = e => {
        e.preventDefault();
        dispatch({ type: CLEAR_COMPLETED });
    };

    return (
        <div className='TodoList'>
            <div className='flex-row'>
                <form onSubmit={handleSubmit}>
                    <label className='hidden' htmlFor='create-todo-input'>Add Todo</label>
                    <input
                        id='create-todo-input'
                        name='create-todo'
                        type='text'
                        value={formValue}
                        onChange={handleChanges}
                    />
                    <button id='create-todo-btn'>Add</button>
                </form>
                <button id='clear-completed-btn' onClick={handleClearCompleted}>Clear</button>
            </div>

            {state && state.map(todo => <Todo key={todo.id} dispatch={dispatch} todo={todo} />)}

            {(state.length < 1) && <p className='empty-list-message'>You're all done with your todos!</p>}
        </div>
    );
};

export default TodoList;
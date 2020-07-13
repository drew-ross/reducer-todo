import React, { useReducer } from 'react';
import Todo from './Todo';
import { todoReducer, todoInitialState, CREATE_TODO, CLEAR_COMPLETED } from '../reducers/todoReducer';

const TodoList = () => {

    const [state, dispatch] = useReducer(todoReducer, todoInitialState);

    return (
        <div className='TodoList'>
            {state && state.map(todo => <Todo key={todo.id} dispatch={dispatch} todo={todo}/>)}
        </div>
    )
};

export default TodoList;
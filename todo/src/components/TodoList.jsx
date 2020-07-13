import React, { useReducer } from 'react';
import Todo from './Todo';
import { todoReducer, todoInitialState } from '../reducers/todoReducer';

const TodoList = () => {

    const [state, dispatch] = useReducer(todoReducer, todoInitialState);

    return (
        <div className='TodoList'>
            {state && state.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    )
};

export default TodoList;
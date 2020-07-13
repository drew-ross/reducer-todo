import React from 'react';

const Todo = ({ todo }) => {

    return (
        <div className='Todo'>
            <div className='todo-name'>{todo.item}</div>
            <button className='todo-check'>Complete</button>
            <button className='todo-delete'>Delete</button>
        </div>
    );
};

export default Todo;
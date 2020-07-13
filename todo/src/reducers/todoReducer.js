const CREATE_TODO = 'CREATE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const todoInitialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}];

export const todoReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
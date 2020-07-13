export const CREATE_TODO = 'CREATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'COMPLETE_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const todoInitialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case CREATE_TODO:
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ];
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
};
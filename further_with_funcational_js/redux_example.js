import { createStore, combineReducers } from 'redux';
const SET_NAME = 'SET_NAME';
const SET_AGE = 'SET_AGE';
function user(state = initialUserState, action) {
    switch (action.type) {
        case SET_NAME: {
            return {
                ...state,
                name: action.name,
            }
        }
        case SET_AGE: {
            return {
                ...state,
                age: action.age,
            }
        }
    }
}
const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const initialState = {
    todos: []
};
function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const { todos } = state;
            return {
                ...state,
                todos: [...todos, action.todo],
            }
        }
        case COMPLETE_TODO: {
            const { todos } = state;
            const index = todos.find(todo => todo.id == action.id);
            todos[index].completed = true;
            return {
                ...state,
                todos,
            }
        }
        default:
            return state;
    }
}
const reducers = combineReducers({
    todos,
    user,
});
const store = createStore(reducers);
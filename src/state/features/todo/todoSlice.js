import { createSlice, nanoid } from '@reduxjs/toolkit';

// We first need to initialize a state (like we would do with useState)
// It can be anything, from a number to an whole object
const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    // We name the slice so we remember what type of state it tracks.
    name: 'todo',

    // We then pass the initial state of this slice (which we created above)
    initialState,

    // We then define the reducers. It's always an object that holds all the logic that updates the state of our store.
    reducers: {
        // Each method has 2 params: state, and action. 
            // "state" holds the previous state and it's also used to update the state.
            // "action" is the data - aka payload - we may pass to the function that we want to use to update the state accordingly.
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    },
});

// We need to export both the individual methods as "actions", as well as the "reducer" as a whole
// The reason we do this is because we need to wire up this particular slice with the store, but
// we also need to export the individual actions that components will be calling. 
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;

/* 
This is our store, aka our global state. This is where every state is stored in our app.
Store is made up of multiple  "reducer slices", which are slices of the state, each responsible for a certain domain in the application.
Reducers are comparable to “Controllers” which is where all the logic is written. Their job is to hold the state and to also “update” it.
*/

// First thing we need is to import configure store (which creates the store for us)
import { configureStore } from "@reduxjs/toolkit";

// We then import all the Reducer Slices here. By convension, we name them "slicenameReducer"
import counterReducer from "./features/counter/counterSlice";
import todoReducer from "./features/todo/todoSlice";



// Finally, we export the store so that it becomes available 
// to the Redux <Provider /> that will wrap the whole <App />
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
    }
});


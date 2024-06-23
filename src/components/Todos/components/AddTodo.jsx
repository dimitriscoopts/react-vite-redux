import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../../../state/features/todo/todoSlice"


export default function AddTodo() {

  const [input, setInput] = useState("");

  // We need to create a dispatch (method) so that we can call the reducers we want
  const dispatch = useDispatch();

  // On "submit", we handle the state change through the dispatch:
  const handleSubmit = (e) => {
    e.preventDefault();

    // This updates the global state
    dispatch(addTodo(input));
    setInput('');
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="addTodoComponent space-x-3-mt-12">
        <input 
          type="text"
          className="
          bg-gray-800 rounded border
          border-gray-700 focus:border-indigo-500focus:ring-2 focus:ring-indigo-900 text-base
          outline-none text-gray-100 py-1 px-3 leading-8transition-colors duration-200 ease-in-out
          " 
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="
            text-white bg-indigo-500 border-0py-2 px-6 focus:outline-none
            hover:bg-indigo-600 rounded text-lg
          "
        >
          Add Todo
        </button>
      </form>
    </>
  )
}

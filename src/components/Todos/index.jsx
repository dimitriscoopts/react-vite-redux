import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../../state/features/todo/todoSlice"

export default function Todos() {

    const todos = useSelector((state) => state.todo.todos)
    const dispatch = useDispatch();
    console.log(todos)

    
    function handleRemove(id) {
        dispatch(removeTodo(id));
    }


  return (
    <>
        <div>Todos:</div>
        {todos.map((todo) => (
            <div key={todo.id} className="">
                <div>
                    {todo.text}
                    <button className="bg-red-500 m-1 p-1" onClick={(e) => handleRemove(todo.id)}> Remove </button>
                </div>
            </div>
        ) )}
    </>
  )
}

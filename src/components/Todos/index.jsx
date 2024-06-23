import { useSelector } from "react-redux"


export default function Todos() {

    const todos = useSelector((state) => state.todo.todos)
    console.log(todos)

  return (
    <>
        <div>Todos:</div>
        {todos.map((todo) => (
            <div
                key={todo.id}
            >
                {todo.text}
            </div>
        ) )}
    </>
  )
}

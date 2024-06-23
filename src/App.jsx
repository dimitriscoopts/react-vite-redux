import './App.css'
import Counter from './components/Counter'
import Todos from './components/Todos'
import AddTodo from './components/Todos/components/AddTodo'

function App() {
  return (
    <>
      <Counter />
      <div style={{height: "100px"}}></div>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App

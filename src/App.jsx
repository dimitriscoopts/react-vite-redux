import './App.css'
import Counter from './components/Counter'
import Dashboard from './components/Dashboard'
import Todos from './components/Todos'
import AddTodo from './components/Todos/components/AddTodo'

function App() {
  return (
    <>
      <div style={{height: "100px"}}></div>
      <Counter />
      <div style={{height: "100px"}}></div>
      <AddTodo />
      <Todos />
      <div style={{height: "100px"}}></div>
      <Dashboard />
    </>
  )
}

export default App

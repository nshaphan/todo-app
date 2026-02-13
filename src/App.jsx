import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setTodos([...todos, { id: Date.now(), text: input, completed: false }])
    setInput('')
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="app-container">
      <h1>My To-Do List</h1>
      <form onSubmit={addTodo} className="todo-form">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button type="submit">Add</button>
      </form>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)} className="delete-btn">×</button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && <p className="empty-state">No tasks yet!</p>}
    </div>
  )
}

export default App

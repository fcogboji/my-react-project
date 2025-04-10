import { useState } from 'react'
import './index.css'
import Stopwatch from './stopwatch.jsx'
import Counter from './counter'
import Clock from './clock'
import TodoList from './TodoList'
import CartComponent from './cartComponent'


function App() {

  return (
    <div className='app-container'>
     <CartComponent />
      <TodoList />
     <Counter />
      <Stopwatch />
      <Clock />
    </div>
  )
}

export default App

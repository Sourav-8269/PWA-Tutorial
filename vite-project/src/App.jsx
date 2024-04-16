import { useState } from 'react'
import './App.css'
import AppRouter from './AppRouter'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div id="main">
        <AppRouter/>
      </div>
    </>
  )
}

export default App

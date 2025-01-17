import './App.css'
import AppRouter from './AppRouter'
import Navbar from './components/Navbar'

function App() {

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

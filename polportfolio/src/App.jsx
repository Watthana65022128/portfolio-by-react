import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Little from './components/Little'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Little />
    </>
  )
}

export default App

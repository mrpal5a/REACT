import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from '../component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card1 username = "anshu" />
    </>
  )
}

export default App
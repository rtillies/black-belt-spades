import { useState } from 'react'
import './App.css'
import Navbar from '../Navbar/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Variations from '../../pages/Variations/Variations'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Navbar />

        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path='/variations' element={<Variations />} />
        </Routes>
      </div>
    </>
  )
}

export default App

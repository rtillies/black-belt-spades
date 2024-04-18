import { useState } from 'react'
import './App.css'
import Navbar from '../Navbar/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Variations from '../../pages/Variations/Variations'
import Custom404 from '../../pages/Custom404/Custom404'
import GamesPage from '../../pages/GamesPage/GamesPage'
import TeamsPage from '../../pages/GamesPage/TeamsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Navbar />

        <Routes>
          <Route index element={<Home />} />
          <Route path='/variations' element={<Variations />} />
          <Route path='/games' element={<GamesPage />} />
          <Route path='/teams' element={<TeamsPage />} />
          <Route path='*' element={<Custom404 />} />
        </Routes>
      </div>
    </>
  )
}

export default App

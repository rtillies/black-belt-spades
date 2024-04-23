import { useState } from 'react'
import './App.css'
import Navbar from '../Navbar/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Variations from '../../pages/Variations/Variations'
import Custom404 from '../../pages/Custom404/Custom404'
import GamesPage from '../../pages/DataPage/GamesPage'
import TeamsPage from '../../pages/DataPage/TeamsPage'
import SingleTeam from '../../pages/DataPage/SingleTeam'
import AddTeam from '../../pages/AddPage/AddTeam'
import Admin from '../../pages/Dashboard/Dashboard'

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
          <Route path='/show' element={<SingleTeam />} />
          <Route path='/add-team' element={<AddTeam />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/login' element={<Admin />} />
          <Route path='*' element={<Custom404 />} />
        </Routes>
      </div>
    </>
  )
}

export default App

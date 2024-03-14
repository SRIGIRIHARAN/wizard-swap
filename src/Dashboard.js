import React from 'react'
import './App.css'
import SideBar from './components/SideBar/SideBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Liquidity from './pages/Liquidity/Liquidity'

const Dashboard = () => {
  return (
    <>
        <div className='dashboard'>
        <SideBar />
        <Routes>
            <Route path='/Home' element={<Home />}></Route>
            <Route path='/Liquidity' element={<Liquidity />}></Route>
        </Routes>
        </div>
    </>
  )
}

export default Dashboard
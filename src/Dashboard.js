import React from 'react'
import NavBar from './components/NavBar/NavBar'
import SideBar from './components/SideBar/SideBar'
import Home from './pages/Home/Home'

const Dashboard = () => {
  return (
    <>
        <NavBar />
        <SideBar />
        <Home />
    </>
  )
}

export default Dashboard
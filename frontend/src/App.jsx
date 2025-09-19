import { useState } from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import LogIn from './Pages/LogIn.jsx'
import MainPage from './Pages/MainPage.jsx'
import SignUp from './Pages/SignUp.jsx' 
import Dashboard from './Pages/Dashboard.jsx'
import ComposePage from './Pages/ComposePage.jsx'
import ScheduleView from './Pages/ScheduleView.jsx'

function App() {
  return (
    <>
      <div className="orb-background">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
        <div className="orb orb4"></div>
        <div className="orb orb5"></div>
        <div className="orb orb6"></div>
        <div className="orb orb7"></div>
        <div className="orb orb8"></div>
        <div className="orb orb9"></div>
      </div>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/dashboard" element={<Dashboard />} />  
        <Route path="/compose" element={<ComposePage/>} />  
        <Route path="/scheduled" element={<ScheduleView/>} />  
      </Routes>
    </>
  )
}

export default App

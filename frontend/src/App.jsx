import { useState } from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import LogIn from './components/LogIn.jsx'
import MainPage from './components/MainPage.jsx'
import SignUp from './components/SignUp.jsx' 
import Dashboard from './components/Dashboard.jsx'   // <-- import your new file
import ComposePage from './components/ComposePage.jsx'

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
      </Routes>
    </>
  )
}

export default App

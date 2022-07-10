import React, { useState, useContext } from 'react'
import './App.scss'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from './state/AuthContext'

const App: React.FC = () => {
  const [button, setButton] = useState<boolean>(false)
  const { user } = useContext(AuthContext)

  const Button = () => {
    setButton(!button)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

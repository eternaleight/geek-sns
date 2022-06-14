import React, { useState, useEffect, useContext } from 'react'
import './App.scss'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/login'

const App: React.FC = () => {
  const [button, setButton] = useState<boolean>(false)
  const Button = () => {
    setButton(!button)
  }
  return (
    <div className="App">
      <Login />
      <div
        onClick={() => Button()}
        className="sticky top-0 text-center cursor-pointer bg-zinc-800"
      >
        Change
      </div>
      {button ? (
        <Home />
      ) : (
        <Profile />
      )}
    </div>
  )
}

export default App

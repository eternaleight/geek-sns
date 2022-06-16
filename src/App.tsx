import React, { useState, useContext } from 'react'
import './App.scss'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/login'
import { LoginContext } from './utils/login-observer'

const App: React.FC = () => {
  const [button, setButton] = useState<boolean>(false)
  const { loginState, setLoginState } = useContext(LoginContext)

  const Button = () => {
    setButton(!button)
  }
  return (
    <div className="App">
      <Login />
      <div
        onClick={() => Button()}
        className={loginState ? " top-[0] text-center cursor-pointer bg-zinc-800 z-[110]":"sticky top-[850px] text-center cursor-pointer bg-zinc-800 z-[110]" }
      >
        Change
      </div>
      {button ? <Home /> : <Profile />}
    </div>
  )
}

export default App


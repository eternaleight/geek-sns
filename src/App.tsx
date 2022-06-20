import React, { useState, useContext } from 'react'
import './App.scss'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
// import { LoginContext } from './utils/login-observer'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from './state/AuthContext'

const App: React.FC = () => {
  const [button, setButton] = useState<boolean>(false)
  // const { loginState } = useContext(LoginContext)
  const { user } = useContext(AuthContext)

  const Button = () => {
    setButton(!button)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
      {/* <Login /> */}
      {/* <div */}
      {/*   onClick={() => Button()} */}
      {/*   className=" top-[0] text-center cursor-pointer bg-zinc-800 z-[110]"        // className={loginState ? " top-[0] text-center cursor-pointer bg-zinc-800 z-[110]":"sticky top-[850px] text-center cursor-pointer bg-zinc-800 z-[110]" } */}
      {/* > */}
      {/*   Change */}
      {/* </div> */}
      {/* {button ? <Home /> : <Profile />} */}
    </BrowserRouter>
  )
}

export default App

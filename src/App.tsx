import React, { useState, useEffect } from 'react'
import './App.scss'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/login'

const App: React.FC = () => {
  const [screenSize, setScreenSize] = useState<number>(
    window.innerWidth < 768 ? 767 : 769
  )

  const windowWidth = () => {
    setScreenSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', windowWidth)
    return () =>
      window.removeEventListener('resize', windowWidth)
  }, [])

  const [button, setButton] = useState<boolean>(false)
  const Button = () => {
    setButton(!button)
  }
  return (
    <div className="App">
      <Login screenSize={screenSize} />
      <div
        onClick={() => Button()}
        className="sticky top-0 text-center cursor-pointer bg-zinc-800"
      >
        Change
      </div>
      {button ? (
        <Home screenSize={screenSize} button={button} />
      ) : (
        <Profile screenSize={screenSize} />
      )}
    </div>
  )
}

export default App

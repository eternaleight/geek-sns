import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ScrollObserver from './utils/scroll-observer'
import SizeObserver from './utils/size-observer'
import LoginObserver from './utils/login-observer'
import { AuthContextProvider } from './state/AuthContext'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <ScrollObserver>
      <SizeObserver>
        <LoginObserver>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </LoginObserver>
      </SizeObserver>
    </ScrollObserver>
  </React.StrictMode>
)


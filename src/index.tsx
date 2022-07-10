import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ScrollObserver from './utils/scroll-observer'
import SizeObserver from './utils/size-observer'
import { AuthContextProvider } from './state/AuthContext'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <ScrollObserver>
      <SizeObserver>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </SizeObserver>
    </ScrollObserver>
  </React.StrictMode>
)


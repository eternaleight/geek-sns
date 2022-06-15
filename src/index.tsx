import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import SizeObserver from './utils/size-observer'
import ScrollObserver from './utils/scroll-observer'
import LoginObserver from './utils/login-observer'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <ScrollObserver>
    <SizeObserver>
      <LoginObserver>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </LoginObserver>
    </SizeObserver>
  </ScrollObserver>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import SizeObserver from './utils/size-observer'
import ScrollObserver from './utils/scroll-observer'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <ScrollObserver>
    <SizeObserver>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SizeObserver>
  </ScrollObserver>
)

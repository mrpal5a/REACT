import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Coffee from './coffee.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Coffee />
  </StrictMode>,
)

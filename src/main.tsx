import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './entries/index.css'
import App from './entries/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

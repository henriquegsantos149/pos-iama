import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import App from '../src/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App checkoutUrl="https://pay.voompcreators.com.br/iqTibgaT8y2zQs0l/?a_id=926969" />
  </StrictMode>,
)

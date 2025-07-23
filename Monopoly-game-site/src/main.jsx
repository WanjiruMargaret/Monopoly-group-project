import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './GameStartScreen.css'
import App from './Apps'



import GameStartScreen from './GameBoard/StartScreen'
const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App/>
    <GameStartScreen />
  </StrictMode>
)

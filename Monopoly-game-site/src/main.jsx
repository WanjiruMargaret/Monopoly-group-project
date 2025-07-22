import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './GameStartScreen.css'



import GameStartScreen from './GameBoard/StartScreen'
const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <GameStartScreen />
  </StrictMode>
)

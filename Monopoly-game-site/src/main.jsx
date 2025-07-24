import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Board from './components/Board'
import './GameStartScreen.css'
import App from './Apps'



import GameStartScreen from './GameBoard/StartScreen'
const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <GameStartScreen />
    <Board />
    <App />
  </StrictMode>
)

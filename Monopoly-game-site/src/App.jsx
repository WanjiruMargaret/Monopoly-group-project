import React, { useState } from 'react';
import GameStartScreen from './GameBoard/StartScreen';
import GameEndScreen from './GameBoard/EndScreen';
import Board from './GameBoard/Board';

// App component
const App = () => {
  const [gameState, setGameState] = useState('start'); // start, playing, end
  const [players, setPlayers] = useState([]);
  
  return (
    <div className="app">
      {gameState === 'start' && (
        <GameStartScreen onStartGame={(playerData) => {
          setPlayers(playerData);
          setGameState('playing');
        }} />
      )}
      
      {gameState === 'playing' && (
        <Board gameBoard={[
          // Add some default board spaces here
          { id: 'go', name: 'GO' },
          { id: 'mediterranean', name: 'Mediterranean Avenue', price: 60 },
          // Add more spaces as needed
        ]} players={players} />
      )}
      
      {gameState === 'end' && (
        <GameEndScreen winner={players.find(p => p.winner)} onPlayAgain={() => setGameState('start')} />
      )}
    </div>
  );
};

export default App;
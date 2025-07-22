import React from 'react';
import '../GameStartScreen.css';

const GameStartScreen = ({ onStartGame, playSound }) => {
  const handleStartGame = () => {
    playSound?.('gameStart');
    // Create default players if none are selected
    const defaultPlayers = [
      { id: 1, name: 'Player 1', money: 1500, position: 0 },
      { id: 2, name: 'Player 2', money: 1500, position: 0 }
    ];
    onStartGame(defaultPlayers);
  };

  return (
    <div className="game-start-screen">
      <div className="start-container">
        <h1 className="game-title">MONOPOLY</h1>
        <div className="start-content">
          <p className="welcome-text">Welcome to the classic property trading game!</p>
          <button className="start-button" onClick={handleStartGame}>
            START GAME!
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameStartScreen;

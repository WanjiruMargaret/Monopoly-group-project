// src/GameBoard/StartScreen.jsx
import React, { useState, useEffect } from 'react';
import './GameStartScreen.css'; // your CSS file for styling

const GameStartScreen = ({ onStartGame, playSound }) => {
  const [showTutorial, setShowTutorial] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      if (saved !== null) return JSON.parse(saved);
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const handleStartGame = () => {
    playSound?.('gameStart');
    const defaultPlayers = [
      { id: 1, name: 'Player 1', money: 1500, position: 0 },
      { id: 2, name: 'Player 2', money: 1500, position: 0 }
    ];
    onStartGame(defaultPlayers);
  };

  return (
    <div className={`start-screen ${darkMode ? 'dark' : 'light'}`}>
      <div className="mode-toggle-container">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mode-toggle-btn"
          aria-label="Toggle dark mode"
        >
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <div className="title-container">
        <h1 className="game-title">MONOPOLY</h1>
        <p className="subtitle">The Fast-Dealing Property Trading Game</p>
      </div>

      <div className="buttons-container">
        <button className="start-button" onClick={handleStartGame}>
          START GAME
        </button>
        <button className="tutorial-button" onClick={() => setShowTutorial(true)}>
          How to Play
        </button>
      </div>

      {showTutorial && (
        <div className="modal-overlay" onClick={() => setShowTutorial(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowTutorial(false)} aria-label="Close tutorial">
              &times;
            </button>
            <h2>📖 How to Play Monopoly</h2>
            <ul className="tutorial-list">
              <li>Roll the dice and move your token clockwise around the board.</li>
              <li>Buy properties you land on — collect rent when others land there.</li>
              <li>Draw Chance or Community Chest cards when prompted.</li>
              <li>If you land on or pass GO, collect $200.</li>
              <li>Pay rent, taxes, or go to jail if you land on those spaces.</li>
              <li>You can upgrade properties by building houses or hotels.</li>
              <li>The last player with money standing wins the game!</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameStartScreen;

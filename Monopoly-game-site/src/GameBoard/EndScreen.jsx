import React from 'react';
import '../GameStartScreen.css';

const GameEndScreen = ({ winner, onRestartGame, playSound }) => {
  const handleRestart = () => {
    playSound?.('gameStart');
    onRestartGame();
  };

  React.useEffect(() => {
    playSound?.('gameEnd');
  }, [playSound]);

  return (
    <div className="game-end-screen">
      <div className="end-container">
        <h1 className="end-title">GAME OVER</h1>
        <div className="winner-section">
          <h2 className="winner-text">🎉 {winner} WINS! 🎉</h2>
          <p className="congratulations">Congratulations on your monopoly empire!</p>
        </div>
        <div className="end-actions">
          <button className="restart-button" onClick={handleRestart}>
            PLAY AGAIN
          </button>
          <button className="menu-button" onClick={() => window.location.reload()}>
            MAIN MENU
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameEndScreen;
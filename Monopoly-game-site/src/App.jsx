import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import GameStartScreen from "./GameBoard/StartScreen.jsx"; 

function App() {
  const navigate = useNavigate();

  const handleStartGame = (defaultPlayers) => {
    // Pass players via state or context if needed
    navigate('/board');
  };

  return (
    <Routes>
      <Route path="/" element={<GameStartScreen onStartGame={handleStartGame} />} />
      {/* <Route path="/board" element={<MonopolyBoard />} /> */}
    </Routes>
  );
}

export default App;

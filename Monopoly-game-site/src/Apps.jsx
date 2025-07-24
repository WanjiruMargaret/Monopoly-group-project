import React, { useState } from "react";
import Dice from "./logicComponents/DiceForm";
import Board from "./logicComponents/Board";
import PlayerPanel from "./logicComponents/PlayerPanel";
import { handlePlayerMove } from "./logicComponents/utilis/MovePlayer";
import propertiesData from "./data/Properties";
import { rollDice, initialPlayers } from "./logicComponents/utilis/GameUtilis"; // ✅ keep this

export default function App() {
  const [players, setPlayers] = useState(initialPlayers);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [dice, setDice] = useState([1, 1]);
  const [properties, setProperties] = useState(propertiesData);

  const handleDiceRoll = () => {
    const [die1, die2] = rollDice(); // ✅ use imported rollDice
    setDice([die1, die2]);
    movePlayer(die1 + die2);
  };

  const movePlayer = (steps) => {
    setPlayers((prevPlayers) => {
      const updated = [...prevPlayers];
      const player = updated[currentPlayerIndex];

      // Skip if player is bankrupt
      if (player.isBankrupt) return updated;

      // Skip turn if in jail
      if (player.turnsInJail > 0) {
        player.turnsInJail -= 1;
        updated[currentPlayerIndex] = player;
        return updated;
      }

      // Normal move
      const updatedPlayer = handlePlayerMove(player, steps, properties, setProperties, updated);
      updated[currentPlayerIndex] = updatedPlayer;
      return updated;
    });

    setCurrentPlayerIndex((i) => (i + 1) % players.length);
  };

  return (
    <div className="app">
      <h1>Monopoly Game MVP</h1>
      <Dice dice={dice} onRoll={handleDiceRoll} />
      <Board players={players} />
      <PlayerPanel players={players} />
    </div>
  );
}
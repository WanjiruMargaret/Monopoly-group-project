import React from "react";

export default function Dice({ dice, onRoll }) {
  return (
    <div>
      <p>Dice: {dice[0]} + {dice[1]}</p>
      <button onClick={onRoll}>Roll Dice</button>
    </div>
  );
}

import React from "react";

export default function Board({ players }) {
  return (
    <div className="board">
      <p>Game Board (placeholder)</p>
      {players.map((p, i) => (
        <p key={i}>{p.name} is at position {p.position}</p>
      ))}
    </div>
  );
}
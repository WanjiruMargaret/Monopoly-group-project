import React from "react";

export default function PlayerPanel({ players }) {
  return (
    <div className="panel">
      {players.map((p, i) => (
        <div key={i} className="border p-2 m-2 rounded bg-white shadow">
          <h3 className="font-bold text-lg">{p.name}</h3>
          <p>Money: ${p.money}</p>
          <p>Position: {p.position}</p>
          <p>
            Properties:{" "}
            {p.properties.length ? p.properties.join(", ") : "None"}
          </p>
          {p.isBankrupt && (
            <p className="text-red-500 font-semibold">Bankrupt</p>
          )}
        </div>
      ))}
    </div>
  );
}

import React from 'react';
import './Board.css'; // You'll need to create this CSS file for styling

const Board = () => {
  // This is a simplified version of a Monopoly board
  // You can expand this with actual game logic and more detailed UI
  
  const boardSpaces = [
    { id: 'go', name: 'GO' },
    { id: 'mediterranean', name: 'Mediterranean Avenue', price: 60 },
    { id: 'community-chest-1', name: 'Community Chest' },
    { id: 'baltic', name: 'Baltic Avenue', price: 60 },
    { id: 'income-tax', name: 'Income Tax', tax: 200 },
    { id: 'reading-rr', name: 'Reading Railroad', price: 200 },
    { id: 'oriental', name: 'Oriental Avenue', price: 100 },
    { id: 'chance-1', name: 'Chance' },
    { id: 'vermont', name: 'Vermont Avenue', price: 100 },
    { id: 'connecticut', name: 'Connecticut Avenue', price: 120 },
    { id: 'jail', name: 'Jail / Just Visiting' },
    // Add more spaces as needed
  ];

  return (
    <div className="monopoly-board">
      <h2>Monopoly Game Board</h2>
      <div className="board-container">
        {boardSpaces.map((space) => (
          <div key={space.id} className={`board-space ${space.id}`}>
            <div className="space-name">{space.name}</div>
            {space.price && <div className="space-price">${space.price}</div>}
            {space.tax && <div className="space-tax">Tax: ${space.tax}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
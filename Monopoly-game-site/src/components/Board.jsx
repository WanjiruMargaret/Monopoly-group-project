import React from 'react';

// Optional: Add more colors as needed
const PLAYER_COLORS = ['red', 'blue', 'green', 'orange', 'purple', 'yellow'];

const Board = ({ gameBoard, players }) => {
  // Helper function to get player tokens on a specific space
  const getPlayersOnSpace = (spaceId) => {
    return players.filter(player => player.position === spaceId);
  };

  // Helper function to determine space class based on type
  const getSpaceClass = (space) => {
    let className = 'board-space';

    if (space.type === 'property') {
      className += ' property';
      className += ` ${space.color}`;
    } else {
      className += ` ${space.type}`;
    }

    // Add corner class for special spaces
    if ([0, 10, 20, 30].includes(space.id)) {
      className += ' corner';
    }

    return className;
  };

  // Helper to get a color for each player
  const getPlayerColor = (playerId) => {
    // Use playerId-1 as index, fallback to gray if out of range
    return PLAYER_COLORS[(playerId - 1) % PLAYER_COLORS.length] || 'gray';
  };

  return (
    <div className="monopoly-board">
      {(gameBoard || []).map(space => (
        <div key={space.id} className={getSpaceClass(space)}>
          <div className="space-name">{space.name}</div>

          {space.type === 'property' && (
            <div className="space-price">${space.price}</div>
          )}

          <div className="player-tokens">
            {getPlayersOnSpace(space.id).map(player => (
              <div
                key={player.id}
                className="player-token"
                style={{ backgroundColor: getPlayerColor(player.id) }}
                title={player.name || `Player ${player.id}`}
              >
                {player.token || player.id}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;


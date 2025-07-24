// Game state and logic
export const initialGameState = {
  players: [
    { id: 1, name: 'Player 1', money: 1500, position: 0, properties: [], inJail: false },
    { id: 2, name: 'Player 2', money: 1500, position: 0, properties: [], inJail: false }
  ],
  currentPlayerIndex: 0,
  dice: [1, 1],
  gameBoard: [
    { id: 0, name: 'GO', type: 'go' },
    { id: 1, name: 'Mediterranean Avenue', type: 'property', price: 60, color: 'brown' },
    { id: 2, name: 'Community Chest', type: 'chest' },
    { id: 3, name: 'Baltic Avenue', type: 'property', price: 60, color: 'brown' },
    { id: 4, name: 'Income Tax', type: 'tax', amount: 200 },
    { id: 5, name: 'Reading Railroad', type: 'railroad', price: 200 },
    { id: 6, name: 'Oriental Avenue', type: 'property', price: 100, color: 'lightblue' },
    { id: 7, name: 'Chance', type: 'chance' },
    { id: 8, name: 'Vermont Avenue', type: 'property', price: 100, color: 'lightblue' },
    { id: 9, name: 'Connecticut Avenue', type: 'property', price: 120, color: 'lightblue' },
    { id: 10, name: 'Jail / Just Visiting', type: 'jail' },
    { id: 11, name: 'St. Charles Place', type: 'property', price: 140, color: 'pink' },
    { id: 12, name: 'Electric Company', type: 'utility', price: 150 },
    { id: 13, name: 'States Avenue', type: 'property', price: 140, color: 'pink' },
    { id: 14, name: 'Virginia Avenue', type: 'property', price: 160, color: 'pink' },
    { id: 15, name: 'Pennsylvania Railroad', type: 'railroad', price: 200 },
    { id: 16, name: 'St. James Place', type: 'property', price: 180, color: 'orange' },
    { id: 17, name: 'Community Chest', type: 'chest' },
    { id: 18, name: 'Tennessee Avenue', type: 'property', price: 180, color: 'orange' },
    { id: 19, name: 'New York Avenue', type: 'property', price: 200, color: 'orange' },
    { id: 20, name: 'Free Parking', type: 'parking' },
    { id: 21, name: 'Kentucky Avenue', type: 'property', price: 220, color: 'red' },
    { id: 22, name: 'Chance', type: 'chance' },
    { id: 23, name: 'Indiana Avenue', type: 'property', price: 220, color: 'red' },
    { id: 24, name: 'Illinois Avenue', type: 'property', price: 240, color: 'red' },
    { id: 25, name: 'B&O Railroad', type: 'railroad', price: 200 },
    { id: 26, name: 'Atlantic Avenue', type: 'property', price: 260, color: 'yellow' },
    { id: 27, name: 'Ventnor Avenue', type: 'property', price: 260, color: 'yellow' },
    { id: 28, name: 'Water Works', type: 'utility', price: 150 },
    { id: 29, name: 'Marvin Gardens', type: 'property', price: 280, color: 'yellow' },
    { id: 30, name: 'Go To Jail', type: 'gotojail' },
    { id: 31, name: 'Pacific Avenue', type: 'property', price: 300, color: 'green' },
    { id: 32, name: 'North Carolina Avenue', type: 'property', price: 300, color: 'green' },
    { id: 33, name: 'Community Chest', type: 'chest' },
    { id: 34, name: 'Pennsylvania Avenue', type: 'property', price: 320, color: 'green' },
    { id: 35, name: 'Short Line Railroad', type: 'railroad', price: 200 },
    { id: 36, name: 'Chance', type: 'chance' },
    { id: 37, name: 'Park Place', type: 'property', price: 350, color: 'blue' },
    { id: 38, name: 'Luxury Tax', type: 'tax', amount: 100 },
    { id: 39, name: 'Boardwalk', type: 'property', price: 400, color: 'blue' }
  ]
};

// Roll dice function
export const rollDice = () => {
  return [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
};

// Move player function
export const movePlayer = (players, currentPlayerIndex, diceRoll) => {
  const updatedPlayers = [...players];
  const currentPlayer = { ...updatedPlayers[currentPlayerIndex] };
  const totalMove = diceRoll[0] + diceRoll[1];
  
  // Calculate new position (wrap around the board)
  let newPosition = (currentPlayer.position + totalMove) % 40;
  
  // Check if player passed GO
  if (newPosition < currentPlayer.position) {
    currentPlayer.money += 200; // Collect $200 for passing GO
  }
  
  // Handle landing on Go To Jail
  if (newPosition === 30) {
    newPosition = 10; // Move to Jail
    currentPlayer.inJail = true;
  }
  
  currentPlayer.position = newPosition;
  updatedPlayers[currentPlayerIndex] = currentPlayer;
  
  return updatedPlayers;
};

// End turn function
export const endTurn = (currentPlayerIndex, playerCount) => {
  return (currentPlayerIndex + 1) % playerCount;
};
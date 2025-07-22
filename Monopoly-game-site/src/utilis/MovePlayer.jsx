export function handlePlayerMove(player, steps, properties, setProperties, allPlayers) {
  let newPosition = (player.position + steps) % 40;
  let updatedPlayer = { ...player, position: newPosition };

  // --- Basic space effects ---
  if (newPosition === 0) {
    updatedPlayer.money += 200; // GO
  } else if (newPosition === 30) {
    updatedPlayer.position = 10; // Jail
    updatedPlayer.turnsInJail = 1; // skip next turn
    return updatedPlayer; // exit early
  }

  //placeholder for community chest
  const communityChestPositions = [2, 17, 33];
  if(communityChestPositions.includes(newPosition)) {
    // Handle community chest logic here
    console.log(`${player.name} landed on a Community Chest space. Draw a card!`);
    // For now, just return the player without changes
    return updatedPlayer;
  }
  //placeholder for chance
  const chancePositions = [7, 22, 36];
  if(chancePositions.includes(newPosition)) {
    // Handle chance logic here
    console.log(`${player.name} landed on a Chance space. Draw a card!`);
    // For now, just return the player without changes
    return updatedPlayer;
  }
  
  //Property logic
  const landedProperty = properties.find((p) => p.id === newPosition);
  if (landedProperty) {
    if (landedProperty.owner === null) {
      if (updatedPlayer.money >= landedProperty.cost) {
        updatedPlayer.money -= landedProperty.cost;
        updatedPlayer.properties.push(landedProperty.name);

        setProperties((prevProps) =>
          prevProps.map((p) =>
            p.id === landedProperty.id ? { ...p, owner: updatedPlayer.name } : p
          )
        );
      }
    } else if (landedProperty.owner !== updatedPlayer.name) {
      // --- Rent logic ---
      const rent = Math.floor(landedProperty.cost * 0.1); // 10% rent
      updatedPlayer.money -= rent;

      const ownerIndex = allPlayers.findIndex(p => p.name === landedProperty.owner);
      if (ownerIndex !== -1) {
        allPlayers[ownerIndex].money += rent;
      }
      // Handle bankruptcy
      if (updatedPlayer.money < 0) {
        updatedPlayer.isBankrupt = true;
        updatedPlayer.money = 0; // Set money to 0 if bankrupt
        updatedPlayer.properties = []; // Lose all properties
        setProperties((prevProps) =>
          prevProps.map((p) =>
            p.owner === updatedPlayer.name ? { ...p, owner: null } : p
          )
        );
      }
    }
  }



  return updatedPlayer;
}


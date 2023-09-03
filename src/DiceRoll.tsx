import React, { useState } from 'react';
import socket from './socket';

const DiceRoll: React.FC = () => {
  const [diceValue, setDiceValue] = useState<number | null>(null);

  const rollDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newValue);
    socket.emit('roll', newValue);
  };

  return (
    <div>
      <button onClick={rollDice}>Roll Dice</button>
      {diceValue !== null && <p>Current Dice Value: {diceValue}</p>}
    </div>
  );
};

export default DiceRoll;

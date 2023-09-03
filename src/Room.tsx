// src/Room.tsx

import React from 'react';
import { useParams } from 'react-router-dom';
import DiceRoll from './DiceRoll';
import Histogram from './Histogram';

const Room: React.FC = () => {
  const { roomCode } = useParams<{ roomCode: string }>();

  return (
    <div>
      <h2>Room {roomCode}</h2>
      <DiceRoll />
      <Histogram />
    </div>
  );
};

export default Room;

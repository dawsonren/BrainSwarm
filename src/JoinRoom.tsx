// src/JoinRoom.tsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import socket from './socket';

const JoinRoom: React.FC = () => {
  const navigate = useNavigate()
  const [roomCode, setRoomCode] = useState('');

  const joinRoom = () => {
    if (roomCode.length === 4) {
      socket.emit('join-room', roomCode);
      navigate(`/room/${roomCode}`);
    }
  };

  return (
    <div>
      <h2>Join a Room</h2>
      <input
        type="text"
        placeholder="Enter Room Code"
        value={roomCode}
        onChange={(e) => setRoomCode(e.target.value)}
      />
      <br />
      <button onClick={joinRoom}>Join Room</button>
      <br />
      <Link to='/'><button>Back</button></Link>
    </div>
  );
};

export default JoinRoom;

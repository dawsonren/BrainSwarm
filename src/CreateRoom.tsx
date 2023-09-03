import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CreateRoom: React.FC = () => {
  const [roomCode, setRoomCode] = useState('');
  const navigate = useNavigate()

  const createRoom = () => {
    // Generate a 4-digit room code (you can customize this logic)
    const newRoomCode = Math.floor(Math.random() * 9000) + 1000;
    setRoomCode(newRoomCode.toString());
    navigate('/')
  };

  return (
    <div>
      <h2>Create a Room</h2>
      {roomCode ? (
        <p>Your Room Code: {roomCode}</p>
      ) : (
        <button onClick={createRoom}>Create Room</button>
      )}
      <br />
      <Link to='/'><button>Back</button></Link>
    </div>
  );
};

export default CreateRoom;

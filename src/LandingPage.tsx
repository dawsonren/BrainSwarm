import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div>
      <h2>Welcome to Dice Room App</h2>
      <Link to="/create">Create a Room</Link>
      <br />
      <Link to="/join">Join a Room</Link>
    </div>
  );
};

export default LandingPage;

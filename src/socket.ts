// src/socket.ts

import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Change URL as needed

export default socket;
// src/socket.ts

import io from 'socket.io-client';

let socket

if (process.env.NODE_ENV === 'production' && process.env.REACT_APP_SERVER_URL !== undefined) {
    socket = io(process.env.REACT_APP_SERVER_URL)
} else {
    socket = io('http://localhost:3001')
}

export default socket;
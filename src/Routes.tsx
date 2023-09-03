// src/Routes.tsx

import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import LandingPage from './LandingPage';
import CreateRoom from './CreateRoom';
import JoinRoom from './JoinRoom';
import Room from './Room';

const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/create",
      element: <CreateRoom />
    },
    {
      path: "/join",
      element: <JoinRoom />
    },
    {
      path: '/room/:roomCode',
      element: <Room />
    }
  ]);

const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;

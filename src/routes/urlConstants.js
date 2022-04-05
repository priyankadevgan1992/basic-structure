import { lazy } from 'react';
import Home from '../home';
import Login from '../login';

const Error = lazy(() => import('../error'));

const urlConstants = {
  HOME: {
    path: '/',
    Component: Home
  },
  LOGIN: {
    path: '/login',
    Component: Login
  },
  Error: {
    path: '/404NotFound',
    Component: Error
  }
};

export default urlConstants;

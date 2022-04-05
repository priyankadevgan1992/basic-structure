// external imports
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
// internal imports
// routes
import urlConstants from './urlConstants';
import PrivateRoutes from './PrivateRoutes';

function AppRoutes() {
  // have to check stored user data from redux store
  const isAuthenticated = useSelector((state) => state.app.isAuthenticated);
  const { HOME, LOGIN } = urlConstants;

  return (
    <Routes>
      <Route index element={<HOME.Component />} />
      <Route path="*" element={isAuthenticated ? <PrivateRoutes /> : <LOGIN.Component />} />
    </Routes>
  );
}

export default AppRoutes;

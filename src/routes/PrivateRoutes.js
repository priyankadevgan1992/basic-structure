import React from 'react';
import { Route, Routes } from 'react-router-dom';

// routes
import urlConstants from './urlConstants';

function PrivateRoutes() {
  const {
    Error
  } = urlConstants;
  return (
    <Routes>
      <Route path="*" element={<Error.Component />} />
    </Routes>
  );
}

export default PrivateRoutes;

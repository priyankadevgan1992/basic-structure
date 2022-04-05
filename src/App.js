import React, { Suspense } from 'react';
import Loader from './components/loader';
import ToastWrapper from './components/toast/ToastWrapper';
import Routes from './routes';

function App() {
  return (
    <Suspense
      fallback={<Loader open />}
    >
      <ToastWrapper />
      <Routes />
    </Suspense>
  );
}

export default App;

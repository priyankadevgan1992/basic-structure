// external imports
import React from 'react';
import { createRoot } from 'react-dom/client';
// router import
import { BrowserRouter } from 'react-router-dom';

// redux imports
import { Provider } from 'react-redux';
import store from './store';

// Theme Customizer
import MuiThemeProvider from './muiThemeProvider';

// internal imports
import App from './App';

// web vitals
import reportWebVitals from './reportWebVitals';

// stylesheets
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// here is where we start creating the DOM, then rendering the App to the UI
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

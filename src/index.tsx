import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
// import AppUnstyled from "./AppUnstyled";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
    {/* <AppUnstyled /> */}
  </React.StrictMode>,
);

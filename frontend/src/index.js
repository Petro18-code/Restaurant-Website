import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import UserContextProvider from './context/UserContextProvider';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <UserContextProvider>
      <App />
      </UserContextProvider>
    </React.StrictMode>
  );


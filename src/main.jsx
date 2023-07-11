import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserCtxProvider } from './context/UserContext';
import './main.css';
ReactDOM.createRoot(document.getElementById('root')).render(

  <UserCtxProvider>
    <App />
  </UserCtxProvider>

);

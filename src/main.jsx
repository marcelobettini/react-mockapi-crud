import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserCtxProvider } from './context/UserContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserCtxProvider>
      <App />
    </UserCtxProvider>
  </React.StrictMode>,
);

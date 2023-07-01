import React from 'react';
import ReactDOM from 'react-dom/client';
import MouseContextProvider from "./context/mouse-context";
import { ContextProvider } from './context/contextProvider';
import { AuthContextProvider } from './context/AuthContext';
// import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <MouseContextProvider>
      <ContextProvider>
          <AuthContextProvider >
           <App />
          </AuthContextProvider>
        </ContextProvider>
    
    </MouseContextProvider>
  </React.StrictMode>

);


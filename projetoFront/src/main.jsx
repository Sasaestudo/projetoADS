import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { PedidosContextProvider } from './contexts/PedidosContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PedidosContextProvider>
      <App />
    </PedidosContextProvider>
  </React.StrictMode>,
);

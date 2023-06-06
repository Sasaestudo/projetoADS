import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ContatosContextProvider} from './contexts/ContatosContext.jsx'
import { UserContextProvider } from './contexts/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
    <PedidosContextProvider>
      <App />
    </PedidosContextProvider>
    </UserContextProvider>
  </React.StrictMode>
)


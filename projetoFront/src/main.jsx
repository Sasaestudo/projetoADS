import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PedidosContextProvider } from './contexts/PedidosContext.jsx'
import { UserContextProvider } from './contexts/UserContext.jsx'
import { DadosContextProvider } from './contexts/DadosContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <DadosContextProvider>
        <PedidosContextProvider>
          <App />
        </PedidosContextProvider>
      </DadosContextProvider>
    </UserContextProvider>
  </React.StrictMode>
)


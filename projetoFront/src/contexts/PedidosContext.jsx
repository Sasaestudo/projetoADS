import { createContext } from "react";
import { useState } from "react";


export const PedidosContext = createContext({
  meusPedidos: [],
  incluirPedido: () => {},
});

function PedidosContextProvider(props){
  const [pedidos, setPedidos] = useState([]);
 
  function incluir(pedido) {
    setPedidos([...pedidos, pedido]); /* copia o array e acresceta um valor */
  }

  const contexto = {
    meusPedidos: pedidos,
    incluirPedido: incluir,
  };

  return(
   <PedidosContext.Provider value={contexto}>
    {props.children}
  </PedidosContext.Provider>
  )
};
export {PedidosContextProvider};

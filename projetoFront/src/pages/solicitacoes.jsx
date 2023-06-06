import { useContext } from 'react';
import './css/solicitacoes.css';
import { PedidosContext } from '../contexts/PedidosContext.jsx';

export default function solicitacoes() {
  const { meusPedidos } = useContext(PedidosContext);

  return (
    <>
      <h2>Historico de Solicitações</h2>
      <ul>
        {meusPedidos.map((pedido, index) => (
          <li className="lista" id={index}>
            {pedido.nome} - {pedido.msg}
          </li>
        ))}
      </ul>
    </>
    
  );
}

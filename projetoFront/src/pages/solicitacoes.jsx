import { useContext, useState } from 'react';
import './css/solicitacoes.css';
import { PedidosContext } from '../contexts/PedidosContext.jsx';
import './css/tabelas.css';
import ampulheta from '../assets/icones/ampulheta.png';
import Modal from '../components/modal';
import Solicitar from '../pages/solicitar';

export default function solicitacoes() {
  const { meusPedidos } = useContext(PedidosContext);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <h2>Historico de Solicitações</h2>
      <table>
        <tbody>
          <tr>
            <th>Departamento</th>
            <th>Solicitação</th>
            <th>Status</th>
          </tr>
          <tr>
            <th>Financeiro</th>
            <th>Meu desconto de matrícula não apareceu no boleto.</th>
            <th>V (icone deferido)</th>
          </tr>
          <tr>
            <th>Secretaria Acadêmica</th>
            <th>Gostaria de ir para a turma 3ADS2</th>
            <th>X (icone indeferido)</th>
          </tr>
          {meusPedidos.map((pedido, index) => (
            <tr key={index}>
              <th>{pedido.nome}</th>
              <th>{pedido.msg}</th>
              <th novaSolicitacao>
                <img src={ampulheta} alt="status" width="20px" />
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="page">
        <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
          {' '}
          {/* ele mesmo define se vai se renderizar ou não, permite seja fechado por ele mesmo(dentro dele)*/}
          <div>
            <Solicitar />
          </div>
        </Modal>
        <div>
          <button
            className="incluir"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            incluir
          </button>
        </div>
      </div>
    </>
  );
}

/* https://aluno-online-web.profjosereginal.repl.co/pages/requerimentos.html */

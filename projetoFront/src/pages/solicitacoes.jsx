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

      <section className='ContainerSection'>
        <h1>Historico de Solicitações</h1>
        <div className='tabela'>
          <table>
            <tbody>
              <tr>
                <th>Departamento</th>
                <th>Solicitação</th>
                <th>Status</th>
              </tr>
              <tr>
                <td>Financeiro</td>
                <td>Meu desconto de matrícula não apareceu no boleto.</td>
                <td className='tabela-centralizar'>
                  <div className='deferido'>Deferido</div>



                </td>
              </tr>
              <tr>
                <td>Secretaria Acadêmica</td>
                <td>Gostaria de ir para a turma 3ADS2</td>
                <td className='tabela-centralizar'>
                  <div className='indeferido'>Indeferido</div>
                </td>
              </tr>
              {meusPedidos.map((pedido, index) => (
                <tr key={index}>
                  <td>{pedido.nome}</td>
                  <td>{pedido.msg}</td>
                  <td novaSolicitacao>
                    <img src={ampulheta} alt="status" width="20px" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="page">
          <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
            {' '}
            {/* ele mesmo define se vai se renderizar ou não, permite seja fechado por ele mesmo(dentro dele)*/}
            <div>
              <Solicitar setModalOpen={setModalOpen} />
            </div>
          </Modal>
          <div>
            <button className="incluir" onClick={() => { setModalOpen(true) }}>
              Incluir
            </button>
          </div>
        </div>
      </section>
    </>
  );

}

/* https://aluno-online-web.profjosereginal.repl.co/pages/requerimentos.html */
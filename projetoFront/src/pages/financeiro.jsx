import React, { useState } from 'react';
import Modal from '../components/modal';
import './css/tabelas.css';
import Pagamento from './pagamento';

export default function financeiro() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <section className="ContainerSection">
        <h1>Financeiro</h1>
        <div className="tabela">
          <table>
            <tbody>
              <tr>
                <th>Mensalidade</th>
                <th>Vencimento</th>
                <th>Valor</th>
                <th>Status</th>
              </tr>
              <tr>
                <td>Rematrícula</td>
                <td>31/12/2022</td>
                <td>R$ 504,69</td>
                <td>Pago</td>
              </tr>
              <tr>
                <td>02/2023</td>
                <td>07/01/2023</td>
                <td>R$ 504,69</td>
                <td>Pago</td>
              </tr>
              <tr>
                <td>02/2023</td>
                <td>07/02/2023</td>
                <td>R$ 504,69</td>
                <td>Pago</td>
              </tr>

              <tr>
                <td>03/2023</td>
                <td>07/03/2023</td>
                <td>R$ 504,69</td>
                <td>
                  <a className="vencido" onClick={handleOpenModal}>Pendente</a>
                </td>
              </tr>
              <tr>
                <td>04/2023</td>
                <td>07/04/2023</td>
                <td>R$ 504,69</td>
                <td>Pago</td>
              </tr>
              <tr>
                <td>05/2023</td>
                <td>07/05/2023</td>
                <td>R$ 504,69</td>
                <td>
                  <a className="vencido" onClick={handleOpenModal}>Pendente</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
        <div>
          <Pagamento />
        </div>
      </Modal>
    </>
  );
}

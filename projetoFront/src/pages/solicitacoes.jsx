import { useContext } from 'react';
import './css/solicitacoes.css';
import { PedidosContext } from '../contexts/PedidosContext.jsx';
import './css/tabelas.css'
import horario from '../assets/icones/horario.svg'


export default function solicitacoes() {
  const { meusPedidos } = useContext(PedidosContext);

  return (
    <>
    <section className='ContainerSection'>
      <h1>Historico de Solicitações</h1>
      <div className='Tabelas'>
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
              {meusPedidos.map((pedido, index) =>
               (<tr key={index}>
                  <th>{pedido.nome}</th> 
                  <th>{pedido.msg}</th>
                  <th novaSolicitacao><img src={horario} alt="status" /></th>
                </tr>))}
          </tbody>
        </table>
      </div>
      </section>
    </>  
  )
}

 /* https://aluno-online-web.profjosereginal.repl.co/pages/requerimentos.html */
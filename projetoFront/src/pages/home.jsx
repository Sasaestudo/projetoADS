import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { format, parseISO } from 'date-fns';
import './css/home.css';
import bibliotecaVirtual from '../assets/fotos/biblioteca.png'



export default function home(){
  
  const [data, setData]=useState (new Date ());
  const formattedDate = format(data, 'dd/MM/yyyy');

  return (

    <section className="ContainerSection ">
       <div className='ContainerHome'>

       </div>
       <h1>Pagina Inicial</h1>
     <div className='bloco1'>
     <article className='calendario'>
        <div>
       <h2>Calendário Acadêmico</h2>
        {formattedDate}
        <Calendar className="calendar" />
        </div> 
      </article>

      <article className='biblioteca'>
        <div>
          <h2>Biblioteca Virtual</h2>
          <a href="https://www.baixelivros.com.br/?s=programa%C3%A7%C3%A3o" target="_blank"><img src={bibliotecaVirtual} alt="Biblioteca Virtual"/></a>   
        </div>
      </article>
     </div>
      

      <article className="perguntas">
        <h2>Perguntas Frequentes</h2>
          <dl>
            <div>
              <dt>Qual forma de pagamento vocês aceitam?</dt>
              <dd>Aceitamos pagamentos parcelados em todos os cartões de crédito. Para pagamentos à vista também aceitamos PIX e boleto, disponíveis na opção "Financeiro" do Menu. </dd>
            </div>
            <div>
              <dt>Como posso trancar o curso?</dt>
              <dd>O estudante que solicitar o Trancamento Geral de Matrícula no período de 1º a 26 de Fevereiro de 2023, deverá pagar, além da renovação da matrícula, a segunda parcela do 1º semestre de 2023 (pro rata tempore até a data de solicitação do Trancamento de Matrícula), cujo vencimento se dará em 10 de fevereiro de 2023.
              </dd>
            </div>
            <div>
              <dt>Qual o valor médio da Colação de grau?</dt>
              <dd>Em média, o custo da formatura para cada formando costuma ficar entre R$ 3 mil e R$ 20 mil. Porém, é importante saber que esse valor também varia conforme o curso. </dd>
            </div>
            <div>
              <dt>Como faço ara pegar meu diploma?</dt>
              <dd>Os diplomas e certificados de conclusão de cursos de graduação e pós-graduação deverão ser retirados no Setor de Registro de Diplomas. O próprio aluno concluinte deverá fazer o requerimento e a retirada dos mesmo no Setor de Atendimento ao Aluno juntamente com um documento de identificação.</dd>
            </div>
            <div>
              <dt>Quanto é o reajuste anual da Faculdade?</dt>
              <dd>A previsão do Sieeesp (Sindicato dos Estabelecimentos de Ensino no Estado de São Paulo), com base nas unidades associadas, aponta para um reajuste entre 10% a 12%. O levantamento nacional do Grupo Rabbit, consultoria especializada em educação, indica um aumento médio da mensalidade para 2023 de 11%. </dd>
            </div>
          </dl>
        </article>
    </section>
    
  )
}
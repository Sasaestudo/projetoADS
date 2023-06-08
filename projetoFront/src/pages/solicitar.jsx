import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { PedidosContext } from '../contexts/PedidosContext.jsx';
import { useNavigate } from 'react-router-dom';
import './css/solicitar.css';

export default function Novo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { incluirPedido } = useContext(PedidosContext);
  const navigate = useNavigate();

  function onSubmit(data) {
    incluirPedido(data), navigate('/solicitar');
  }
  const { meusPedidos } = useContext(PedidosContext);
  return (
    <>
      <h2>Nova Solicitação</h2>
      <form onSubmit={handleSubmit(onSubmit) }>
        <label for="opcoes">Departamento</label>
        <select defaultValue={""} name="opcoes" {...register('nome', { required: 'Campo Obrigatório!' })}
        >
          <option disabled ></option>
          <option>Coordenação Curso</option>
          <option>Financeiro</option>
          <option>Secretaria Acadêmica</option>
        </select>

        <label>Mensagem</label>
        <textarea
          minLength={10}
          rows="4"
          cols="50"
          placeholder="Digite aqui..."
          {...register('msg', { required: 'Campo Obrigatório' })}></textarea>
        {errors.msg && <p>{errors.msg.message}</p>}

        <button type="submit">Enviar</button>
      </form>

      <h2>Minhas Solicitações</h2>
      <ul>
        {meusPedidos.map((pedido, index) => (
          <li className="lista" id={index}>{pedido.nome} - {pedido.msg}
          <p>Resposta:</p></li>
        ))}
      </ul>
    </>
  );
}

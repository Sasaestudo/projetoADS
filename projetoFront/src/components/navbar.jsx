import { NavLink, useNavigate } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    
      <ul className='listaMenu'>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/notas">Notas</NavLink>
        </li>
        <li>
          <NavLink to="/grade">Grade Horária</NavLink>
        </li>
        <li>
          <NavLink to="/financeiro">Financeiro</NavLink>
        </li>
        <li>
          <NavLink to="/solicitar">Solicitar</NavLink>
        </li>
        <li>
          <NavLink to="/solicitacoes">Solicitações</NavLink>
        </li>
        <input type="button" value="sair" />
      </ul>
    
  );
}

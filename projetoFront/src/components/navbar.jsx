import { NavLink, Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext'
import './navbar.css';



export default function Navbar() {

const {handleLogout} = useContext(UserContext)

const handleSair=() => {
  handleLogout()
}
  
  return (
    
      <ul className='listaMenu'>
        <li>
          <NavLink to="/home">Home</NavLink>
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
        <li>
        <Link to="/" onClick={handleSair}>Sair</Link>
        </li> 
       
      </ul>
    
  );
}

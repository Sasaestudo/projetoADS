import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/pages/css/App.css';
import Layout from './components/layout';
import Home from './pages/home';
import Notas from './pages/notas';
import GradeDisciplina from './pages/grade';
import NotasCadastrar from './pages/notasCadastrar';
import Financeiro from './pages/financeiro';
import Pagamento from './pages/pagamento';
import Solicitar from './pages/solicitar';
import Solicitacoes from './pages/solicitacoes';
import Ajuda from './pages/ajuda';
import Erro from './pages/erro';
import Login from './pages/login';
import UserContext from './contexts/UserContext';
import RecuperaSenha from './pages/recuperaSenha';
import { useContext } from 'react';


export default function App() {
  const { logado } = useContext(UserContext);
  return (
    <BrowserRouter>
     
          <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/recuperaSenha" element={<RecuperaSenha />} />
          { logado ?
        <>   <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/notas" element={<Notas />} />
            <Route path="/grade" element={<GradeDisciplina />} />
            <Route path="/notasCadastrar" element={<NotasCadastrar />} />
            <Route path="/financeiro" element={<Financeiro />} />
            <Route path="/pagamento" element={<Pagamento />} />
            <Route path="/solicitacoes" element={<Solicitacoes />} />
            <Route path="/solicitar" element={<Solicitar />} />
            <Route path="/ajuda" element={<Ajuda />} />
          </Route>
          </>
          :
          <>
        <Route path="*" element={<Erro />} /></>
          }
      </Routes>
    </BrowserRouter>
  );
}

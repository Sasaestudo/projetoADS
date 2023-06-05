import { useContext } from "react"
import './css/solicitacoes.css';
import {ContatosContext} from "../contexts/ContatosContext.jsx"

export default function solicitacoes(){
    const {meusContatos} = useContext(ContatosContext)
    
    return(
        <>
     <h2>Historico de Solicitações</h2>  
         <ul>
                {meusContatos.map((contato, index) =>
                <li className="lista" id={index}>{contato.nome} - {contato.telefone}</li>)}
        </ul>

        </>
    )
}
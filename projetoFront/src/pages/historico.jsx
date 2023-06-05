import { useContext } from "react"
import {ContatosContext} from "../contexts/ContatosContext.jsx"
import home from "../pages/home.css"

export default function Home(){
    const {meusContatos} = useContext(ContatosContext)
    
    return(
        <>
     <h2>Meus Contatos</h2>  
         <ul>
                {meusContatos.map((contato, index) =>
                <li className="lista" id={index}>{contato.nome} - {contato.telefone}</li>)}
        </ul>

        </>
    )
}

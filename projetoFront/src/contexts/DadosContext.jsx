import { createContext, useState } from "react";
import { listaGrade, insereGrade } from "../services/TableService";

const DadosContext = createContext({
    grade: [], // tarefas
    listaGrade: () => { }, //listaTarefas
    insereGrade: () => { },
})

export function DadosContextProvider(props) {
    const [minhaGrade, setMinhaGrade] = useState([])

    async function listar() {
        try {
          const data = await listaGrade()
          setMinhaGrade(data)
        } catch (error) {
          throw Error(error.message)
        }
      }

      async function inserir(gradeAluno) {
        try {
          await insereGrade(gradeAluno)
          setMinhaGrade([...minhaGrade, gradeAluno])
        } catch (error) {
          throw Error(error.message)
        }
      }

      const contexto = {
        grade: minhaGrade,
        listaGrade: listar,
        insereGrade: inserir,
      }
    
    return (
        <DadosContext.Provider value={contexto}>
            {props.children}
        </DadosContext.Provider>
    )
}

export default DadosContext

import { createContext, useState } from "react";
import { listaGrade, insereGrade, listaDados   } from "../services/TableService";


const DadosContext = createContext({
    grade: [], // tarefas
    dadosAluno: [],
    listaGrade: () => { }, //listaTarefas
    insereGrade: () => { },
    listaDados: () => {}

})

export function DadosContextProvider(props) {
    const [minhaGrade, setMinhaGrade] = useState([])
    const [meusDados, setMeusDados] = useState([])

    async function listar(userId) {
        try {
          const data = await listaGrade()
        //  console.log(data)
          setMinhaGrade(data.filter((item) => item.key === key))
        } catch (error) {
          throw Error(error.message)
        }
      }

      async function dados(userId) {
        try {
          const data = await listaDados()
        //  console.log(data)
          setMeusDados(data.filter((item) => item.key === key))
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
        dadosAluno: meusDados,
        listaGrade: listar,
        listaDados: dados,
        insereGrade: inserir,
      }
    
    return (
        <DadosContext.Provider value={contexto}>
            {props.children}
        </DadosContext.Provider>
    )
}

export default DadosContext

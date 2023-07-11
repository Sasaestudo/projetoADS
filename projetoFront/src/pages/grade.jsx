import './css/tabelas.css';
import { useState, useContext, useEffect } from 'react';
import DadosContext from '../contexts/DadosContext'
import UserContext from '../contexts/UserContext';



export default function gradeDisciplina() {
    const { userId } = useContext(UserContext)
    const { grade, listaGrade, listaDados, dadosAluno} = useContext(DadosContext)
    const gradeAluno = grade.find((item) => item.key == userId) //gradeAluno equivalente a tarefa
    const aluno = dadosAluno.find((item) => item.key == userId) //gradeAluno equivalente a tarefa

    
  //  const { register, handleSubmit } = useForm()
    const [loading, setLoading] = useState(false)
    
    /*
    async function onSubmit(data) {
        try {
          await insereGrade(data)
          console.log(data)
        } catch (error) {
          console.log(error.message)
        }
      }*/

    console.log(grade)

    useEffect(() => {
    async function carrega() {
      setLoading(true)
      listaGrade(userId)
      listaDados(userId)
      setLoading(false)
    }    
    carrega()
    }, [])


  return (
        <>
            <section className='ContainerSection'>
                <h1>Grade Horária</h1>
                <div className='tabela'>

                   {loading ? <h3>Aguarde...</h3> :
                <table> 
                    <thead>
                        <tr>
                            <th>Dia</th>
                            <th>Disciplina</th>
                            <th>Horario</th>
                            <th>Sala</th>
                        </tr>
                        </thead>
                        <tbody>
                         {grade.map((item, key) => // exibe grade
                         <tr key={key}>
                            <td className='txtEsq'>{item.Dia}</td> 
                            <td className='txtEsq'>{item.Disciplina}</td>  
                            <td className='txtEsq'>{item.Horario}</td>  
                            <td className='txtEsq'>{item.Sala}</td>
                            </tr>
                         )}
                        </tbody>
                 </table>
             }
                    </div>
                    </section>
      </>
        )
    }

    /*                 {loading ? <h3>Aguarde...</h3> :
                 <ol> 
                {grade.map((item, key) => // exibe grade
                    <li key={key}>{item.Dia} - {item.Disciplina} - {item.Horario} - {item.Sala}</li>
                   )}
                </ol>
      }*/

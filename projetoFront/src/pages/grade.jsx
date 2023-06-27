import './css/tabelas.css';
import { Link } from 'react-router-dom';

export default function gradeDisciplina() {
    return (
        <>
            <section className='ContainerSection'>
                <h1>Grade Horária</h1>
                <div className='tabela'>
                    <table>
                        <tbody>
                            <tr>
                                <th>Dia</th>
                                <th>Disciplina</th>
                                <th>Horário</th>
                                <th>Sala</th>
                            </tr>
                            <tr>
                                <td className='txtEsq'>Segunda</td>
                                <td className='txtEsq'>Business Intelligence e Data Warehousing</td>
                                <td>19:15 ás 22:00</td>
                                <td>301</td>
                            </tr>
                            <tr>
                                <td className='txtEsq'>Terça</td>
                                <td className='txtEsq'>Construção de Frontend</td>
                                <td>19:15 ás 23:00</td>
                                <td>301</td>
                            </tr>
                            <tr>
                                <td className='txtEsq'>Quarta</td>
                                <td className='txtEsq'>Governança de TI</td>
                                <td>19:15 ás 22:00</td>
                                <td>204</td>
                            </tr>
                            <tr>
                                <td className='txtEsq'>Quinta</td>
                                <td className='txtEsq'>Manutenção de Software e DevOps</td>
                                <td>19:15 ás 22:00</td>
                                <td>301</td>
                            </tr>
                            <tr>
                                <td className='txtEsq'>Sábado</td>
                                <td className='txtEsq'>Direitos Humanos e Ambientais</td>
                                <td>08:15 ás 10:00</td>
                                <td>204</td>
                            </tr>
                            <tr>
                                <td className='txtEsq'>EAD</td>
                                <td className='txtEsq'>Tópicos de Matemática</td>
                                <td>--</td>
                                <td>--</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

/** Código com erro, não exibe os dados do firebase
 * 
export default function gradeDisciplina() {
    const { key } = useParams()
    const { grade, listaGrade, insereGrade } = useContext(DadosContext)
    const gradeAluno = grade.find((item) => item.key == key) //gradeAluno equivalente a tarefa
    const { register, handleSubmit } = useForm()
    const [loading, setLoading] = useState(false)

    async function onSubmit(data) {
        try {
          await insereGrade(data)
          console.log(data)
        } catch (error) {
          console.log(error.message)
        }
      }

      
    useEffect(() => {
    async function carrega() {
      setLoading(true)
      await listaGrade()
      setLoading(false)
    }    
    carrega()
    }, [])
    
    console.log(listaGrade)
    console.log(grade)
    console.log(gradeAluno)
    console.log(DadosContext)
  return (// insere grade
        <>
            x
            <section className='ContainerSection'>
                <h1>Grade Horária</h1>
                <div className='tabela'>

                {loading ? <h3>Aguarde...</h3> :
                 <ol> 
                {grade.map((gradeAluno, key) => // exibe grade
                    <li key={key}>{grade.dia} - {grade.disciplina} - {grade.horario} - {gradeAluno.sala}
                    <li>{grade.disciplina}</li>
                    </li>)}
        </ol>
      }
                </div>
 */
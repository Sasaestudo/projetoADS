import './css/tabelas.css';
import { Link } from 'react-router-dom';
export default function grade() {
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
                                <td className='dia-left'>Segunda</td>
                                <td className='disciplina-left'>Business Intelligence e Data Warehousing</td>
                                <td>19:15 ás 22:00</td>
                                <td>301</td>
                            </tr>
                            <tr>
                                <td className='dia-left'>Terça</td>
                                <td className='disciplina-left'>Construção de Frontend</td>
                                <td>19:15 ás 23:00</td>
                                <td>301</td>
                            </tr>
                            <tr>
                                <td className='dia-left'>Quarta</td>
                                <td className='disciplina-left'>Governança de TI</td>
                                <td>19:15 ás 22:00</td>
                                <td>204</td>
                            </tr>
                            <tr>
                                <td className='dia-left'>Quinta</td>
                                <td className='disciplina-left'>Manutenção de Software e DevOps</td>
                                <td>19:15 ás 22:00</td>
                                <td>301</td>
                            </tr>
                            <tr>
                                <td className='dia-left'>Sábado</td>
                                <td className='disciplina-left'>Direitos Humanos e Ambientais</td>
                                <td>08:15 ás 10:00</td>
                                <td>204</td>
                            </tr>
                            <tr>
                                <td className='dia-left'>EAD</td>
                                <td className='disciplina-left'>Tópicos de Matemática</td>
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
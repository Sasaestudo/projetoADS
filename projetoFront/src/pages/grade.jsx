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
import './css/tabelas.css';
import './css/solicitacoes.css';
export default function notas() {
    function calculoMedia(a, b) {
        return (a + b) / 2;
    }
    return (
        <>
            <section className='ContainerSection'>
                <h1>Notas</h1>
                <div className='tabela'>
                    <table>
                        <tbody>
                            <tr>
                                <th>Disciplina</th>
                                <th>A1</th>
                                <th>A2</th>
                                <th>Média</th>
                                <th>Faltas</th>
                                <th>Situação</th>
                            </tr>
                            <tr>
                                <td className='disciplina-left'>Business Intelligence e Data Warehousing</td>
                                <td>9.1</td>
                                <td>3.7</td>
                                <td>{calculoMedia(9.1, 3.7)}</td> 
                                <td>6</td>



                                
                                <td><div className='deferido'>Aprovado</div></td>
                            </tr>
                            <tr>
                                <td className='disciplina-left'>Construção de Frontend</td>
                                <td>1.0</td>
                                <td></td>
                                <td></td> 
                                <td>12</td>
                                <td><div className='matriculado'> Matriculado</div></td>
                            </tr>
                            <tr>
                                <td className='disciplina-left'>Direitos Humanos e Ambientais</td>
                                <td>8.5</td>
                                <td>9.32</td>
                                <td>{calculoMedia(8.5, 9.32)}</td> 
                                <td>0</td>
                                <td><div className='deferido'>Aprovado</div></td>
                            </tr>
                            <tr>
                                <td className='disciplina-left'>Governança de TI</td>
                                <td>8.8</td>
                                <td>7.0</td>
                                <td>{calculoMedia(8.8, 7)}</td> 
                                <td>3</td>
                                <td><div className='deferido'>Aprovado</div></td>
                            </tr>
                            <tr>
                                <td className='disciplina-left'>Manutenção de Software e DevOps</td>
                                <td>8.8</td>
                                <td>9.9</td>
                                <td>{calculoMedia(8.8, 9.8)}</td> 
                                <td>9</td>
                                <td><div className='deferido'>Aprovado</div></td>
                            </tr>
                            <tr>
                                <td className='disciplina-left'>Projeto Integrado - Frontend</td>
                                <td>3.0</td>
                                <td>10.0</td>
                                <td>{calculoMedia(3, 10)}</td> 
                                <td>2</td>
                                <td><div className='deferido'>Aprovado</div></td>
                            </tr>

                            <tr>
                                <td className='disciplina-left'>Tópicos de Matemática</td>
                                <td>4.2</td>
                                <td>3.7</td>
                                <td>{calculoMedia(4.2, 3.7)}</td> 
                                <td>15</td>
                                <td><div className='indeferido'>Reprovado</div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}
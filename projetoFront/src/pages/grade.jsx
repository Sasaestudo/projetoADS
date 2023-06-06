import './css/tabelas.css';

export default function grade(){
    return(
        <>            
        <h1>Grade Horária</h1>
            <table>
                <tr>
                    <th>Dia</th>
                    <th>Disciplina</th>
                    <th>Horário</th>                        
                    <th>Sala</th>                                                           
                </tr>
                <tr>
                    <td>Segunda</td>
                    <td>Lógica da Programação</td>
                    <td>08:15 ás 11:00</td>
                    <td>301</td>                                                                          
                </tr>
                <tr>
                    <td>Terça</td>
                    <td>Tópicos de Matemática<thead>Álgebra Linear</thead></td>
                    <td>08:15 ás 09:30<thead>10:00 ás 11:00</thead></td>
                    <td>301<thead>102</thead></td>                                                                          
                </tr>
                <tr>
                    <td>Quarta</td>
                    <td>Banco de Dados<thead>Banco de Dados</thead><thead>Álgebra Linear</thead></td>
                    <td>08:15 ás 09:30<thead>10:00 ás 11:00</thead><thead>11:00 ás 11:50</thead></td>
                    <td>204<thead>204</thead><thead>105</thead></td>                                                                          
                </tr>
                <tr>
                    <td>Quinta</td>
                    <td>Projeto de Interface</td>
                    <td>08:15 ás 11:30</td>
                    <td>303</td>                                                                          
                </tr>
                <tr>
                    <td>Sexta</td>
                    <td>Banco de Dados<thead>Levantamente de Requisitos</thead></td>
                    <td>08:15 ás 09:30<thead>10:00 ás 11:00</thead></td>
                    <td>204<thead>106</thead></td>                                                                          
                </tr>
            </table>

        </>
    )
}
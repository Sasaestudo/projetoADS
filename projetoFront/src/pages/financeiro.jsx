import './css/financeiro.css'
export default function financeiro(){
    return(
        <>
        <h1>Financeiro</h1>
            <table>
                <tr>
                    <th>Mensalidade</th>
                    <th>Vencimento</th>
                    <th>Valor</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>Rematrícula</td> 
                    <td>31/12/2022</td>
                    <td>R$ 504,69</td>
                    <td>Pago</td>
                </tr>
                <tr>
                    <td>02/2023</td> 
                    <td>07/01/2023</td>
                    <td>R$ 504,69</td>
                    <td>Pago</td>
                </tr>

                <tr>
                    <td>02/2023</td> 
                    <td>07/02/2023</td>
                    <td>R$ 504,69</td>
                    <td>Pago</td>
                </tr>

                <tr>
                    <td>03/2023</td> 
                    <td>07/03/2023</td>
                    <td>R$ 504,69</td>
                    <td>Atrasado</td>
                </tr>
                <tr>
                    <td>04/2023</td> 
                    <td>07/04/2023</td>
                    <td>R$ 504,69</td>
                    <td >Pago</td>
                </tr>
                <tr>
                    <td>05/2023</td> 
                    <td>07/05/2023</td>
                    <td>R$ 504,69</td>
                    <td>Em aberto</td>
                </tr>        
            </table>        

        </>
    )
}
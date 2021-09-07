import { useEffect } from "react"
import { api } from "../../services/api"
import { Container } from "./styles"

export const TransactionsTable = () => {

    useEffect(() => {
        api.get('/transactions')
        .then(res => console.log(res.data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className='deposit'>R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr> 
                    
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw" >- R$ 1.100,00</td>
                        <td>Casa</td>
                        <td>17/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}


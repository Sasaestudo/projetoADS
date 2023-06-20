import './css/erro.css';
import { Link } from 'react-router-dom';
export default function Erro() {
    return (
        <>
            <section className="ContainerSection">
                <div className='titulo'>404</div>
                <div className='subtitulo'> <span className='ops'>Ops!!!</span> A página que você procura não existe.</div>
                <Link to="/home"><button className='botao-erro'>Página Inicial</button></Link>
            </section>
        </>
    )
}
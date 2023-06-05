import { Outlet } from 'react-router-dom'
import '../components/layout.css'
import Navbar from './navbar'
import Footer from './footer'


export default function Layout(){
    return(
        <>
        <header>
            <h1>FACIT</h1>
            <div>
        </div>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>       
            <Footer />
        </>
    )
}
import { Outlet } from 'react-router-dom'
import '../components/layout.css'
import Navbar from './navbar'
import Footer from './footer'


export default function Layout(){
    return(
        <>
        <header>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>       
        <footer>
            <Footer />
        </footer>
        </>
    )
}
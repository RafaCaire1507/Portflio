
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Container from '../../Components/Container'
import { Outlet } from 'react-router-dom'

function PaginaBase() {
    return (
        <main>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </main>
    )
}

export default PaginaBase

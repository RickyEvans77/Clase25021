import Nav from "../componentes/Nav.jsx"
import Header from "../componentes/Header.jsx"
import Main from "../componentes/Main.jsx"
import Footer from "../componentes/Footer"
import ProductosContainer from "../componentes/ProductosContainer.jsx"

function Home() {

    return (
        <div>
            <div>
                <Nav />
                <Header />
                <Main />
                <Footer />
            </div>
            <div>
                <Nav />
                <ProductosContainer />
                <Footer />
            </div>
        </div>
    )
}
export default Home
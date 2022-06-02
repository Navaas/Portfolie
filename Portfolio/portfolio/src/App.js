import css from './utils/styles/css/Global.css'
import Navbar from './components/NavBar/NavBar'
import Routing from './router/Routing'
import Footer from './components/footer/Footer'

function App() {
    return (
        <>
            <Routing>
                <Navbar/>
            </Routing>
            <Footer/>
        </>
    );
}

export default App;

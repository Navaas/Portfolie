import css from './utils/styles/css/Global.css'
import Navbar from './components/NavBar/NavBar'
import Routing from './router/Routing'

function App() {
    return (
        <>
            <Routing>
                <Navbar/>
            </Routing>
        </>
    );
}

export default App;

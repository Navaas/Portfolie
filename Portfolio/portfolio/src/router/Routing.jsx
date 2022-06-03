import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RoutingPath from './RoutingPath'
import HomeView from '../views/homeview/HomeView'
import ContactView from '../views/contactView/ContactView'
import PortfolieView from '../views/PortfolieView'
import AboutView from '../views/aboutView/AboutView'

const Routing = (props) => {
    return (
        <BrowserRouter>
            { props.children }
            <Routes>
                <Route path={ RoutingPath.homeView } element={ <HomeView/> } />
                <Route path={ RoutingPath.contactView } element={ <ContactView/> } />
                <Route path={ RoutingPath.portfolieView } element={ <PortfolieView/> } />
                <Route path={ RoutingPath.aboutView } element={ <AboutView/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
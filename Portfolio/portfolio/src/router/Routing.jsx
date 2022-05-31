import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RoutingPath from './RoutingPath'
import HomeView from '../views/HomeView'
import ContactView from '../views/ContactView'
import PortfolieView from '../views/PortfolieView'
import BloggView from '../views/BloggView'

const Routing = (props) => {
    return (
        <BrowserRouter>
            { props.children }
            <Routes>
                <Route path={ RoutingPath.homeView } element={ <HomeView/> } />
                <Route path={ RoutingPath.contactView } element={ <ContactView/> } />
                <Route path={ RoutingPath.portfolieView } element={ <PortfolieView/> } />
                <Route path={ RoutingPath.bloggView } element={ <BloggView/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
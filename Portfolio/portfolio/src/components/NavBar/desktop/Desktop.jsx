import css from './Desktop.module.css'
import { Link } from 'react-router-dom'
import RoutingPath from '../../../router/RoutingPath'

const Desktop = () => {

    return (
        <nav>
            <ul className={ css.ul }>
                <li className={ `${ css.li }` }>
                    <Link className={ css.link } to={ RoutingPath.bloggView }>Blogg</Link>
                </li>
                <li className={ css.li }>
                    <Link className={ css.link } to={ RoutingPath.portfolieView }>Portfolie</Link>
                </li>
                <li className={ css.li }>
                    <Link className={ css.link } to={ RoutingPath.contactView }>Contact</Link>
                </li>
                <li className={ `${ css.li } ${ css.active }` }>
                    <Link className={ css.link } to={ RoutingPath.homeView }>Home</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Desktop
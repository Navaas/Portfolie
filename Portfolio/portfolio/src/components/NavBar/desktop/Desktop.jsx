import styles from './Desktop.module.css'
import { Link } from 'react-router-dom'
import RoutingPath from '../../../router/RoutingPath'

const Desktop = () => {

    return (
        <nav>
            <ul className={ styles.list }>
                <li className={ `${ styles.item } ${ styles.active }` }>
                    <Link className={ styles.link } to={ RoutingPath.homeView }>Home</Link>
                </li>
                <li className={ styles.item }>
                    <Link className={ styles.link } to={ RoutingPath.contactView }>Contact</Link>
                </li>
                <li className={ styles.item }>
                    <Link className={ styles.link } to={ RoutingPath.portfolieView }>Portfolie</Link>
                </li>
                <li className={ `${ styles.item }` }>
                    <Link className={ styles.link } to={ RoutingPath.bloggView }>Blogg</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Desktop
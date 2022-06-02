import css from './Footer.module.css'
import linkedinIcon from '../../utils/images/linkedin.png'
import githubIcon from '../../utils/images/github.png'

function Footer() {
    return (
        <footer className={css.container}>
            <section>
                <a href="https://www.linkedin.com/in/michaela-andreasson-421824224/" target="_blank"><img className={css.image}
                                                                                                          src={linkedinIcon}
                                                                                                          alt="linkedin"/></a>
                <a href="https://github.com/micand89" target="_blank"><img className={css.image}
                                                                           src={githubIcon}
                                                                           alt="github"/></a>
                <section>
                    <p className={css.text}>Copyright by: Michaela Andreasson</p>
                </section>
            </section>
        </footer>
    )
}

export default Footer


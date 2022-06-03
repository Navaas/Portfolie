import css from '../aboutView/AboutView.module.css'
import githubIcon from '../../utils/images/github.png'

const AboutView = () => {
    return (
        <div className={css.container}>
            <section className={css.empty}></section>
            <section className={css.containerImage}>
                <img src={githubIcon} alt="github" className={css.image}/>
            </section>
            <section className={css.containerText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                dignissimos eligendi error
                impedit odit pariatur perspiciatis, vitae. Accusamus architecto aspernatur dignissimos ea enim nam quas
                quia quod rerum ut? Consequatur facere ipsam ut. Adipisci aliquid consequatur, explicabo incidunt iste
                maiores molestias nemo non porro quaerat quibusdam suscipit temporibus ullam veniam.
                <br/>
                <button className={css.buttonCv}>Till mitt cv</button>
            </section>
            <section className={css.empty}></section>
        </div>
    )
}

export default AboutView
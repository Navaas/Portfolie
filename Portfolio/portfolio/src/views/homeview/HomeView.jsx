import css from './HomeView.module.css'

const HomeView = () => {
    return (
        <div className={css.homeView}>
            <section>
                <p>Hi, and welcome to me..</p>
                <p className={css.bigText}>Michaela Andreasson</p>
                <p className={css.smallText}>Web designer and  full-stack developer</p>
            </section>
        </div>
    )
}

export default HomeView
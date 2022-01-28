import CommonPageStyle from './common-page.module.css'

const CommonPage = ({ children, title }) => {
    return <div className={CommonPageStyle['common-page__container']}>
        <section className={CommonPageStyle['common-page__title-container']}>
            <h1 className={CommonPageStyle['common-page__title']}>
                {title}
                <span className={CommonPageStyle['common-page__title-underline']}/>
            </h1>
        </section>
        <section className={CommonPageStyle['common-page__content-container']}>
            {children}
        </section>
    </div>
}

export default CommonPage
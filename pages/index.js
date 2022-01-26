import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import { InternacionalizationContext } from '../src/components/i18n'
import { withTransitionOverlay } from '../src/components/with-transition-overlay'
import styles from '../styles/Home.module.css'

const Home = function Home() {

	const { translate } = useContext(InternacionalizationContext)

	return (
		<div className={styles.home}>
			<Head>
				<title>Portfolio - Matheus Trindade</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles['home__main-section']}>
				<div className={styles['home__developer-info']}>
					<h1 className={styles['home__name']}>Matheus Trindade</h1>
					<span className={styles['home__role']}>{translate('MAIN_JOB_TITLE_TEXT')}</span>
				</div>
				<div className={styles['home__img-bg']}>
					<Image src="/images/home-img-bg.jpg" alt="picture of the author" layout='fill' />
				</div>
			</main>
		</div>
	)
}

export default withTransitionOverlay(Home)
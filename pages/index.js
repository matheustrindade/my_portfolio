import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import { InternacionalizationContext } from '../src/components/i18n'
import styles from '../styles/Home.module.css'

export default function Home() {

	const { translate } = useContext(InternacionalizationContext)

	return (
		<div className={styles.container}>
			<Head>
				<title>Portfolio - Matheus Trindade</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				{translate('WELCOME')}
				<div className={styles['my-img-container']}>
					<Image src="/home-img-bg.jpg" alt="picture of the author" layout='fill' />
				</div>
			</main>
		</div>
	)
}

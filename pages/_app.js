import Internacionalization from '../src/components/i18n'
import '../styles/globals.css'
import Navbar from '../src/components/navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link
        rel="preload"
        href="/fonts/Lato-Regular.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Lato-Thin.ttf"
        as="font"
        crossOrigin=""
      />
    </Head>
    <Internacionalization>
      <Navbar />
      <Component {...pageProps} />
    </Internacionalization>
  </>
}

export default MyApp

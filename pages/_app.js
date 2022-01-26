import Internacionalization from '../src/components/i18n'
import '../styles/globals.css'
import Navbar from '../src/components/navbar'
import Head from 'next/head'
import TansitionOverlay from '../src/components/with-transition-overlay'

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
    <TansitionOverlay>
      <Internacionalization>
        <Navbar />
        <Component {...pageProps} />
      </Internacionalization>
    </TansitionOverlay>
  </>
}

export default MyApp

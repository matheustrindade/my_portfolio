import '../styles/globals.css'
import Navbar from '../src/components/navbar'
import Head from 'next/head'
import AppProvider from '../src/components/app-provider'

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
    <AppProvider>
      <Navbar />
      <Component {...pageProps} />
    </AppProvider>
  </>
}

export default MyApp

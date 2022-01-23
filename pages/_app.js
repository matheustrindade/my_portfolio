import Internacionalization from '../src/components/i18n'
import '../styles/globals.css'
import Navbar from '../src/components/navbar'

function MyApp({ Component, pageProps }) {
  return <Internacionalization>
    <Navbar />
    <Component {...pageProps} />
  </Internacionalization>
}

export default MyApp

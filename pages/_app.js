import Internacionalization from '../src/components/i18n'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Internacionalization>
    <Component {...pageProps} />
  </Internacionalization>
}

export default MyApp

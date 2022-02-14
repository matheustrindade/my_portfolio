import Internacionalization from "../i18n"
import TansitionOverlay from '../with-transition-overlay'

const AppProvider = ({ children }) => {
    return <TansitionOverlay>
        <Internacionalization>
            {children}
        </Internacionalization>
    </TansitionOverlay>
}

export default AppProvider
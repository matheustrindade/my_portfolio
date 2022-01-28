import { useContext } from "react"
import { InternacionalizationContext } from "../../src/components/i18n"
import { withTransitionOverlay } from "../../src/components/with-transition-overlay"
import CommonPage from "../../src/templates/common-page"

const About = () => {

    const { translate } = useContext(InternacionalizationContext)

    return <CommonPage title={translate('ABOUT')}>

    </CommonPage>
}

export default withTransitionOverlay(About)
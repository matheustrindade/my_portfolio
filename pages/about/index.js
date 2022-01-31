import Image from "next/image"
import { useCallback, useContext } from "react"
import { InternacionalizationContext } from "../../src/components/i18n"
import { withTransitionOverlay } from "../../src/components/with-transition-overlay"
import CommonPage from "../../src/templates/common-page"
import styles from './about.module.css'
import Info from '../../src/components/info'

const About = () => {

    const { translate } = useContext(InternacionalizationContext)

    const getAge = useCallback(() => {
        const birthDate = new Date(1995, 10, 5);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0) {
            age--;
        } else if (m === 0 && today.getDate() < birthDate.getDate()) {
            age--;
        }
        return age;
    }, [])

    return <CommonPage title={translate('ABOUT')}>
        <div className={styles['about__card-container']}>
            <div className={styles['about__card']}>
                <div className={styles['about__img-bg']}>
                    <Image src="/images/about-img-bg.png" alt="another picture of the author" layout='fill' />
                </div>
            </div>
        </div>
        <div className={styles['about__info']}>
            <div className={styles['about__how-am-i']}>
                <h2 className={styles['about__how-am-i-title']}>
                    {translate("HOWAMI")}
                </h2>
                <h3 className={styles['about__how-am-i-subtitle']}>
                    {translate("HOWAMI_SUBTITLE")}
                </h3>
                <p className={styles['about__how-am-i-description']}>
                    {translate("HOWAMI_DESCRIPTION")}
                </p>
            </div>
            <div className={styles['about__personsal-data']}>
                <div className={styles['about__personsal-data-container']}>
                    <div className={styles['about__personsal-data-column']}>
                        <Info
                            label={translate("NAME_LABEL")}
                            value="Matheus Trindade"
                        />
                    </div>
                    <div className={styles['about__personsal-data-column']}>
                        <Info
                            label={translate("AGE_LABEL")}
                            value={getAge()}
                        />
                    </div>
                    <div className={styles['about__personsal-data-column']}>
                        <Info
                            label={translate("BITH_CITY_LABEL")}
                            value={translate("BITH_CITY")}
                        />
                    </div>
                </div>
                <button className={styles['about__download-cv']} alt={translate("DOWNLOAD_CV")}>
                    {translate("DOWNLOAD_CV")}
                </button>
            </div>
        </div>
    </CommonPage>
}

export default withTransitionOverlay(About)
import React, { useContext } from 'react'
import navStyles from './navbar.module.css'
import HomeIcon from '../home-icon'
import Link from 'next/link'
import { InternacionalizationContext } from '../i18n'

const Navbar = () => {

    const { translate } = useContext(InternacionalizationContext)

    return <nav className={navStyles.navbar}>
        <div className={navStyles['navbar__home-btn']}>
            <Link href="/">
                <a type='button'>
                    <HomeIcon />
                </a>
            </Link>
        </div>
        <div className={navStyles['navbar__container']}>
            <ul className={navStyles['navbar__navigation']}>
                <li className={navStyles['navbar__item']}>
                    <Link href="/about">
                        <a type='button'>
                            {translate('NAVBAR_ABOUT_ME')}
                        </a>
                    </Link>
                </li>
                <li className={navStyles['navbar__item']}>
                    <Link href="/about">
                        <a type='button'>
                            {translate('NAVBAR_EXPERIENCES')}
                        </a>
                    </Link>
                </li>
                <li className={navStyles['navbar__item']}>
                    <Link href="/about">
                        <a type='button'>
                            {translate('NAVBAR_SKILLS')}
                        </a>
                    </Link>
                </li>
                <li className={navStyles['navbar__item']}>
                    <Link href="/about">
                        <a type='button'>
                            {translate('NAVBAR_CONTACTE_ME')}
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
}

export default Navbar
import React from 'react'
import navStyles from './navbar.module.css'
import HomeIcon from '../home-icon'
import Link from 'next/link'

const Navbar = () => {
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
                            sobre
                        </a>
                    </Link>
                </li>
                <li className={navStyles['navbar__item']}>experiências</li>
                <li className={navStyles['navbar__item']}>skills</li>
                <li className={navStyles['navbar__item']}>contato</li>
            </ul>
        </div>
    </nav>
}

export default Navbar
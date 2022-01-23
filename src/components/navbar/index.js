import React from 'react'
import navStyles from './navbar.module.css'
import HomeIcon from '../home-icon'
import Link from 'next/link'

const Navbar = () => {
    return <div className={navStyles.container}>
        <div className={navStyles['home-btn']}>
            <Link href="/">
                <a type='button'>
                    <HomeIcon />
                </a>
            </Link>
        </div>
        <div className={navStyles['actions-container']}>
            <ul className={navStyles.actions}>
                <li>sobre</li>
                <li>experiências</li>
                <li>skills</li>
                <li>contato</li>
            </ul>
        </div>
    </div>
}

export default Navbar
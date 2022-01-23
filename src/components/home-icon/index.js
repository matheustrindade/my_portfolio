import React from 'react'
import HomeStyles from './home-icon.module.css'

const HomeIcon = () => {
    return <div className={HomeStyles['home-icon']}>
        <div className={HomeStyles['home-icon__roof']} />
        <div className={HomeStyles['home-icon__wall']} />
    </div>
}

export default HomeIcon
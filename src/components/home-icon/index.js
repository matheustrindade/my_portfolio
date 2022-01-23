import React from 'react'
import HomeStyles from './home-icon.module.css'

const HomeIcon = () => {
    return <div className={HomeStyles.container}>
        <div className={HomeStyles.roof} />
        <div className={HomeStyles.wall} />
    </div>
}

export default HomeIcon
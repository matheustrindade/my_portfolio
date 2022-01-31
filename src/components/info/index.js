import style from './info.module.css'

const Info = ({label, value}) => {
    return <div className={style.info__container}>
        <span className={style.info__label}>{label}:</span>
        <span className={style.info__value}>{value}</span>
    </div>
}

export default Info
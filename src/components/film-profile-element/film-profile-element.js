import styles from './film-profile-element.module.css'

export default function FilmProfileElement({src, name, description}) {
    return (
        <div className={styles.container}>
            
                <img className={styles.poster} src ={src} alt='poster'></img>
            <div className={styles.text}>
            <div className={styles.header}>
                <h2 className={styles.name}>{name}</h2>
                <div className={styles.stars}></div>
            </div>
            <p className={styles.description}>{description}</p>
                <div className={styles.footer}>
                </div>

                </div>
        </div>
    )
}
import styles from './profile-element.module.css'


export function ProfileElement(){
    return(
        <section className={styles.main}>
            <div className={styles.profileContainer}>
                <img src={require('../../../images/memoji.jpg')} alt='logo' className={styles.img}></img>
                <p className={styles.name}>Qoukolo Jane</p>
                <input className={styles.searchPanel} placeholder='SEARCH'></input>
                


            </div>
            
        </section>
    )
}
import styles from './nav-panel.module.css'

export default function NavPanel(){
    return(
        <section className={styles.background}>
            
            <img src={require('../../images/logo.png')} alt='logo' className={styles.logo}></img>
            <nav>
                <ul className={styles.ul}>
                    <li className={styles.link}><img src={require('../../images/search-icon.png')} alt='logo' className={styles.icon}></img></li>
                    <li className={styles.link}><img src={require('../../images/friends-icon.png')} alt='logo' className={styles.icon}></img></li>
                    <li className={styles.link}><img src={require('../../images/notif-icon.png')} alt='logo' className={styles.icon}></img></li>
                    <li className={styles.link}><img src={require('../../images/message-icon.png')} alt='logo' className={styles.icon}></img></li>
                    <li className={styles.link}><img src={require('../../images/logout-icon.png')} alt='logo' className={styles.icon}></img></li>
                </ul>
            </nav>
        </section>
    )
}
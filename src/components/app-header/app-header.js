import styles from './app-header.module.css'

export function AppHeader() {
    return (

        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <p className={styles.text}>GeeCh</p>
                    <div className={styles.img}></div>

                </div>
                <nav className={styles.navPanel}>
                    <p className={styles.list}>private list</p>
                    <p className={styles.list}>friends</p>
                    <p className={styles.list}>profile</p>

                </nav>
            </div>
        </section>


    )
}
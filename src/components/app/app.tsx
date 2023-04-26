import React from 'react';

import { AppHeader } from '../app-header/app-header';
import { ProfileElement } from '../profile-element/profile-element'
import styles from './app.module.css'
import ProfileList from '../profile-list/profile-list';
import NavPanel from '../nav-panel/nav-panel';



export function App() {
  return (
    <>

      <main className={styles.main}>

        <section className={styles.flex}>
          <NavPanel />
          <section className={styles.profileContainer}>

            <ProfileElement />

            <ProfileList />

          </section>
        </section>



      </main>

    </>
  )

}

export default App;

import React from 'react';

import { AppHeader } from './app-header/app-header';
import { ProfileElement } from './profile-element/profile-element'
import styles from './app.module.css'
import ProfileList from '../profile-list/profile-list';



export function App() {
  return (
    <>
    
      <main className={styles.main}>
        <AppHeader />
        
        <section className={styles.profileContainer}>
        <ProfileElement />
        
        <ProfileList />
        
        </section>
       
        
      </main>

    </>
  )
  
}

export default App;

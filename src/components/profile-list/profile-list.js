import styles from './profile-list.module.css'
import FilmProfileElement from '../film-profile-element/film-profile-element'
import { hardCodeApi } from '../../utils/constants'

export default function ProfileList() {
    
    return (
        
        <section className={styles.profileList}>
            
                <FilmProfileElement name={hardCodeApi.firstName} description={hardCodeApi.firstDescription} src={hardCodeApi.firstSrc}/>
                <FilmProfileElement name={hardCodeApi.secondName} description={hardCodeApi.secondDescription} src={hardCodeApi.secondSrc}/>
                <FilmProfileElement name={hardCodeApi.thirdName} description={hardCodeApi.thirdDescription} src={hardCodeApi.thirdSrc}/>
            
               
            
            
            
        </section>
    )
}
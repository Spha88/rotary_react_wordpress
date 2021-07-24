import React from 'react'
import styles from './ImportantLinks.module.scss'

const ImportantLinks = () => {
    return (
        <div className={styles.ImportantLinks}>
            <h2>Important Links</h2>
            <div className={styles.Links}>
                <a href="https://www.rotary.org/en/get-involved/join" target="_blank" rel="noopener noreferrer">Join</a>
                <a href="https://my.rotary.org/en/search/club-finder" target="_blank" rel="noopener noreferrer">Find a Club</a>
                <a href="https://my.rotary.org/en/donate" target="_blank" rel="noopener noreferrer">Donate</a>
            </div>
        </div>
    )
}

export default ImportantLinks

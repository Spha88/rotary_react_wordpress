import React from 'react';
import logo from '../../assets/images/rotary_logo.svg';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.Logo}>
                <img src={logo} alt="Rotary Logo" /> <h1>Port Alfred</h1>
            </div>
        </header>
    )
}

export default Header;

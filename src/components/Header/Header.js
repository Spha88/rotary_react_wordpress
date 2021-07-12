import React from 'react';
import logo from '../../assets/images/rotary_logo.svg';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.Logo}>
                <img src={logo} alt="" />
            </div>
        </header>
    )
}

export default Header;

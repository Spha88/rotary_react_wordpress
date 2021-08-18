import React from 'react';
import styles from './Nav.module.scss';
import LargeScreenNav from './LargeScreen/LargeScreenNav';
import MobileScreenNav from './MobileScreen/MobileScreenNav';

const Nav = () => {
    return (
        <nav className={styles.Nav}>
            <LargeScreenNav />
            <MobileScreenNav />
        </nav>
    )
}

export default Nav;
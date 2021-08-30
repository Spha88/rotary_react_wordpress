import React, { useState } from 'react';
import styles from './MobileScreenNav.module.scss';
import { NavLink } from 'react-router-dom';
import rotary_logo from '../../../assets/images/rotary_logo.svg';

const Nav = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className={styles.Nav}>
            <div className={styles.LogoContainer}>
                <img src={rotary_logo} alt="Rotary Logo" /> <h1>Port Alfred</h1>
            </div>
            <button onClick={() => setOpen(!open)}>Menu</button>
            <ul style={{ display: open ? 'block' : 'none' }}>
                <li>
                    <NavLink onClick={() => setOpen(!open)} to="/" activeClassName={styles.Active} exact>About Rotary</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setOpen(!open)} to="/causes" activeClassName={styles.Active} >Our causes</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setOpen(!open)} to="/events" activeClassName={styles.Active} >Events</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setOpen(!open)} to="/news" activeClassName={styles.Active} >News</NavLink>
                </li>
                <li>
                    <NavLink onClick={() => setOpen(!open)} to="/Members" activeClassName={styles.Active} >Members</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav;
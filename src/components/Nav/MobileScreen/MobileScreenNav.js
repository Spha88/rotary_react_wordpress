import React, { useState } from 'react';
import styles from './MobileScreenNav.module.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className={styles.Nav}>
            <button onClick={() => setOpen(!open)}>Menu</button>
            <ul style={{ display: open ? 'block' : 'none' }}>
                <li>
                    <NavLink to="/" activeClassName={styles.Active} exact>About Rotary</NavLink>
                </li>
                <li>
                    <NavLink to="/causes" activeClassName={styles.Active} >Our causes</NavLink>
                </li>
                <li>
                    <NavLink to="/events" activeClassName={styles.Active} >Events</NavLink>
                </li>
                <li>
                    <NavLink to="/news" activeClassName={styles.Active} >News</NavLink>
                </li>
                <li>
                    <NavLink to="/Members" activeClassName={styles.Active} >Members</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav;
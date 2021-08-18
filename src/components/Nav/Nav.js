import React from 'react';
import styles from './Nav.module.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={styles.Nav}>
            <ul>
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
        </nav>
    )
}

export default Nav;
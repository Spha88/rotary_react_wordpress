import React from 'react';
import styles from './Nav.module.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={styles.Nav}>
            <ul>
                <li>
                    <NavLink to="/">About Rotary</NavLink>
                </li>
                <li>
                    <NavLink to="/causes">Our causes</NavLink>
                </li>
                <li>
                    <NavLink to="/">News</NavLink>
                </li>
                <li>
                    <NavLink to="/">Members</NavLink>
                </li>
                <li>
                    <NavLink to="/">Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
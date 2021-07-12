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
                    <NavLink to="/">Get Involved</NavLink>
                </li>
                <li>
                    <NavLink to="/">Our Causes</NavLink>
                </li>
                <li>
                    <NavLink to="/">Our Programs</NavLink>
                </li>
                <li>
                    <NavLink to="/">News</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
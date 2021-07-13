import React from 'react';
import styles from './Button.module.scss';

const Button = ({ label }) => {
    return (
        <button className={styles.Button}>{label}</button>
    )
}

export default Button

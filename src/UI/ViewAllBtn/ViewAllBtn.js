import React from 'react';
import styles from './ViewAllBtn.module.scss';
import { Link } from 'react-router-dom';

const ViewAllBtn = ({ to, label }) => {
    return (
        <Link to={to} className={styles.ViewAllBtn}>{label}</Link>
    )
}

export default ViewAllBtn

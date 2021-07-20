import React from 'react';
import styles from './ErrorLoading.module.scss';

const ErrorLoading = () => {
    return (
        <div className={styles.ErrorContainer}>
            <h3>Error loading data</h3>
            <p>Check your internet connection.</p>
            <p>If your computer is connected, contact your webmaster.</p>
        </div>
    )
}

export default ErrorLoading

import React from 'react';
import styles from './PageHeader.module.scss';
import pg_header_bg from '../../assets/images/pg_header_bg.jpg';

const PageHeader = ({ label, backgroundImage }) => {
    return (
        <header className={styles.PageHeader}
            style={{ backgroundImage: `url(${backgroundImage ? backgroundImage : pg_header_bg})` }}
        >
            <h1>{label}</h1>
        </header>
    )
}

export default PageHeader

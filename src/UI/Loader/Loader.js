import React from 'react';
import styles from './Loader.module.scss';
import loader from '../../assets/images/rotary_loader.svg';

const Loader = () => {
    return (
        <div className={styles.Loader} style={{ backgroundImage: `url(${loader})` }}>
        </div>
    )
}

export default Loader

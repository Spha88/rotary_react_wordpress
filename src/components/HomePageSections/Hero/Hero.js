import React from 'react';
import styles from './Hero.module.scss';
import logo from '../../../assets/images/rotary_logo_white.svg';
import hero from '../../../assets/images/hero.jpg';

const Hero = () => {
    return (
        <div className={styles.Hero} style={{ backgroundImage: `url(${hero})` }}>
            <div>
                <img src={logo} alt="Rotary logo white" />
                <h1>People <span>of</span> Action</h1>
                <p>Rotary is where neighbors, friends, and problem solvers share ideas, join leaders, and take action to create lasting change</p>
            </div>
        </div>
    )
}

export default Hero

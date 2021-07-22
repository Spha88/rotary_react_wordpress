import React from 'react'
import styles from './JoinSection.module.scss';
import world_bg from '../../assets/images/rotary_world_network.png'
import { Container } from '../../UI/Container';


const JoinSection = () => {
    return (
        <div className={styles.JoinSection}
            style={{ backgroundImage: `url(${world_bg})` }}
        >
            <Container>
                <div className={styles.Content}>
                    <h1>Join Port Alfred Rotary</h1>
                    <p>Club activities, social events, and volunteer projects offer networking opportunities that build personal and professional connections. And Rotarians can extend those networks by visiting other clubs around the globe.</p>
                    <button>Learn More</button>
                </div>
            </Container>
        </div>
    )
}

export default JoinSection

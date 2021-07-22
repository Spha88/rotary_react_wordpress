import React from 'react';
import styles from './LatestStories.module.scss';
import story_1 from '../../assets/images/story_1.jpg';
import story_2 from '../../assets/images/story_2.jpg';
import story_3 from '../../assets/images/story_3.jpg';
import { Container } from '../../UI/Container';

const LatestStories = () => {
    return (
        <div className={styles.LatestStories}>
            <Container>
                <h1>Latest Stories</h1>
                <div className={styles.Content}>
                    <div className={styles.LastStory} style={{ backgroundImage: `url(${story_2})` }}>

                    </div>
                    <div className={styles.LastTwoStories}>
                        <div className={styles.Story}>
                            <img src={story_3} alt="" />
                            <div className={styles.Details}>
                                <p className={styles.Time}>12 July 2021</p>
                                <h3>This is the story of life</h3>
                                <p>All things come to things come to an endthings come to an end an end</p>
                            </div>
                        </div>
                        <div className={styles.Story}>
                            <img src={story_1} alt="" />
                            <div className={styles.Details}>
                                <p className={styles.Time}>30 May 2021</p>
                                <h3>This is the story of life</h3>
                                <p>All things come to an end things come to an endthings come to an end</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default LatestStories

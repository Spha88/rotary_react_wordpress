import React, { useState, useEffect } from 'react';
import { getCauses } from '../../lib/api';
import { extractor, removeTags } from '../../lib/utils';
import styles from './CausesSection.module.scss';
import textured_bg from '../../assets/images/textured_bg.jpg';
import { Container } from '../../UI/Container';


const CausesSection = () => {
    const [state, setState] = useState({
        loading: true,
        error: false,
        causes: []
    })

    useEffect(() => {
        const fetchAboutPage = async () => {
            const causes = await getCauses();
            if (causes) {
                setState(state => ({ ...state, loading: false, causes: causes.causes.edges }))
            } else {
                setState(state => ({ ...state, loading: false, error: true }))
            }
        }
        fetchAboutPage();
    }, [])

    const { loading, error, causes } = state;
    console.log(causes);

    return (
        <div className={styles.CausesSection} style={{ backgroundImage: `url(${textured_bg})` }}>
            {!loading && !error &&
                <Container>
                    <h1 className={styles.Heading}>Our causes</h1>
                    <p className={styles.Lead}>Rotary is dedicated to causes that build international relationships, improve lives, and create a better world to support our peace efforts and end polio forever.</p>
                    <div className={styles.Cards}>
                        {causes && causes.map(cause => (
                            <div className={styles.Card} key={cause.node.id}>
                                <div className={styles.CardImage} style={{ backgroundImage: `url(${cause.node.featuredImage.node.sourceUrl})` }}></div>
                                <div className={styles.CardBody} >
                                    <h1>{cause.node.title}</h1>
                                    <p dangerouslySetInnerHTML={{ __html: extractor(removeTags(cause.node.content), 25) }}></p>
                                    <a href="http://" target="_blank" rel="noopener noreferrer">Learn more</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            }
        </div>
    )
}

export default CausesSection;

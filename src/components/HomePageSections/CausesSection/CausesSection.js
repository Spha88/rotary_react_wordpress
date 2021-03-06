import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './CausesSection.module.scss';
import { getCauses } from '../../../lib/api/causes';
import { extractor, removeTags } from '../../../lib/utils';
import textured_bg from '../../../assets/images/textured_bg.jpg';
import { Container } from '../../../UI/Container';
import ViewAllBtn from '../../../UI/ViewAllBtn/ViewAllBtn';


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
                setState(state => ({ ...state, loading: false, causes: causes.causes.nodes }))
            } else {
                setState(state => ({ ...state, loading: false, error: true }))
            }
        }
        fetchAboutPage();
    }, [])

    const { loading, error, causes } = state;

    return (
        <div className={styles.CausesSection} style={{ backgroundImage: `url(${textured_bg})` }}>
            {!loading && !error &&
                <Container>
                    <h1 className={styles.Heading}>Our causes</h1>
                    <p className={styles.Lead}>Rotary is dedicated to causes that build international relationships, improve lives, and create a better world to support our peace efforts and end polio forever.</p>
                    <div className={styles.Cards}>
                        {causes && causes.map(cause => (
                            <div className={styles.Card} key={cause.id}>
                                <div className={styles.CardImage} style={{ backgroundImage: `url(${cause.featuredImage.node.sourceUrl})` }}></div>
                                <div className={styles.CardBody} >
                                    <h1>{cause.title}</h1>
                                    <p dangerouslySetInnerHTML={{ __html: extractor(removeTags(cause.content), 25) }}></p>
                                    <Link to={`/causes/${cause.slug}`} rel="noopener noreferrer">Learn more</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.BtnContainer}>
                        <ViewAllBtn to="/causes" label="View All" />
                    </div>

                </Container>
            }
        </div>
    )
}

export default CausesSection;

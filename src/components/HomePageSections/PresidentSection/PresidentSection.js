import React, { useState, useEffect } from 'react';
import styles from './PresidentSection.module.scss';
import { Container } from '../../../UI/Container';
import { getSinglePage } from '../../../lib/api/pages';
import { extractor, removeTags } from '../../../lib/utils';
import Button from '../../../UI/Button/Button';

const PresidentSection = () => {



    const [state, setState] = useState({
        loading: true,
        error: false,
        page: [],

        // for the length of the extract
        numberOfWords: 90,
    })

    useEffect(() => {
        // Check the size of the screen. 
        const mediaMatch = window.matchMedia('(max-width: 768px)')

        const handler = e => setState(state => ({ ...state, numberOfWords: e.matches ? 50 : 90 }))
        mediaMatch.addEventListener('change', handler);

        const fetchAboutPage = async () => {
            const page = await getSinglePage('our-president');
            if (page) {
                setState(state => ({ ...state, loading: false, page: page.page }))
            } else {
                setState(state => ({ ...state, loading: false, error: true }))
            }
        }

        fetchAboutPage();

        console.log("Reloaded")

        return () => mediaMatch.removeEventListener('change', handler);

    }, []);

    const { page, loading, error, numberOfWords } = state;

    return (
        <div className={styles.President}>
            {!loading && !error &&
                <Container>
                    <h1>Word from the President</h1>
                    <div className={styles.Content}>
                        <img src={page.featuredImage.node.sourceUrl} alt={page.featuredImage.node.altText} />
                        <div className={styles.ContentDetails}>
                            <h3>{page.extraDetails.presidentName}</h3>
                            <div className={styles.Message} dangerouslySetInnerHTML={{ __html: extractor(removeTags(page.content), numberOfWords) }} />
                            <Button label="Read More" />
                        </div>
                    </div>
                </Container>
            }
        </div>
    )
}

export default PresidentSection

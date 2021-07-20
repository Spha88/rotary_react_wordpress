import React, { useState, useEffect } from 'react';
import { getAboutPage } from '../../lib/api';
import { extractor, removeTags } from '../../lib/utils';
import styles from './AboutSection.module.scss';
import Loader from '../../UI/Loader/Loader';
import Button from '../../UI/Button/Button';

const AboutSection = () => {

    const [state, setState] = useState({
        loading: true,
        error: false,
        aboutPage: []
    })

    useEffect(() => {
        const fetchAboutPage = async () => {
            const aboutPage = await getAboutPage();
            if (aboutPage) {
                setState(state => ({ ...state, loading: false, aboutPage: aboutPage.page }))
                // console.log('We have data to work with')
            } else {
                setState(state => ({ ...state, loading: false, error: true }))
                // console.log('No data was returned')
            }
        }
        fetchAboutPage();
    }, [])

    const { loading, error, aboutPage } = state;

    return (
        <div className={styles.AboutSection}>
            {!loading && !error &&
                <div className={styles.ContentContainer}>
                    <div className={styles.Content}>
                        <h1>{aboutPage.title}</h1>
                        <p dangerouslySetInnerHTML={{ __html: extractor(removeTags(aboutPage.content), 100) }}>
                        </p>
                        <Button label="Read More" />
                    </div>
                </div>
            }

            {loading &&
                <div className={styles.LoaderContainer}><Loader /></div>
            }

            {error &&
                <div className={styles.ErrorContainer}>
                    <h3>Error loading data</h3>
                    <p>Check your internet connection.</p>
                    <p>If your computer is connected, contact your webmaster.</p>
                </div>
            }
        </div>

    )
}

export default AboutSection

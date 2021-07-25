import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import styles from './SingleEventPage.module.scss';
import { Container } from '../../../UI/Container';
import { getEventBySlug } from '../../../lib/api/events';
import Loader from '../../../UI/Loader/Loader';
import ErrorLoading from '../../../UI/ErrorLoading/ErrorLoading';
import NextEventSection from '../../../components/HomePageSections/NextEventSection/NextEventSection';
// import LatestNewsLinks from '../../../components/NewsComponents/LatestNewsLinks/LatestNewsLinks';


const SingleEventPage = () => {
    const history = useHistory();
    console.log(history);
    const { slug } = useParams();
    const [state, setState] = useState({
        loading: true,
        error: false,
        event: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const event = await getEventBySlug(slug);
            if (event) {
                setState(state => ({ ...state, loading: false, event: event.event }))
            } else {
                setState(state => ({ ...state, loading: false, error: true, event: [] }))
            }
        }
        fetchData();

    }, [slug])

    const { loading, error, event } = state;

    return (
        <div className={styles.SingleEventPage}>
            <Container>

                <div className={styles.PageNav}>
                    <span className={styles.Back} onClick={() => history.goBack()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        Go Back
                    </span>
                </div>

                {!loading && !error && <NextEventSection singleEvent={event} />}

                <div className={styles.EventContainer}>
                    <div className={styles.Event}>
                        {!loading && !error &&
                            <div className={styles.EventDetails}>
                                <h2>Description</h2>
                                <div className={styles.Description} dangerouslySetInnerHTML={{ __html: event.content }} />
                            </div>
                        }

                        {loading && <Loader />}

                        {error && <ErrorLoading />}

                    </div>

                    <aside>

                    </aside>

                </div>




            </Container>
        </div>
    )
}

export default SingleEventPage

import React, { useState, useEffect } from 'react';
import { getEvents } from '../../lib/api';
import Loader from '../../UI/Loader/Loader';
import styles from './NextEventSection.module.scss';
import textured_bg from '../../assets/images/textured_bg.jpg';

const NextEventSection = () => {
    const [state, setState] = useState({
        loading: true,
        errorLoading: false,
        event: []
    })

    useEffect(() => {
        const fetchEvents = async () => {
            const events = await getEvents();
            if (events) {
                setState(state => ({ ...state, loading: false, event: events.events.edges[0].node }))
            } else {
                setState(state => ({ ...state, loading: false, error: true }))
            }
        }

        fetchEvents();

    }, [])

    const { loading, error, event } = state;

    console.log(event)
    return (
        <div className={styles.NextEventSection}
            style={{ backgroundImage: `url(${textured_bg})` }}
        >
            {!loading && !error &&
                <div className={styles.ContentContainer}
                    style={{ backgroundImage: `url(${event.eventDetails.backgroundImage.sourceUrl})` }}
                >

                    <div className={styles.EventDetails}>
                        <h5>Next Event</h5>
                        <h1>{event.title}</h1>
                        {event.eventDetails.host &&
                            <h3>By {event.eventDetails.host}</h3>
                        }
                        <p dangerouslySetInnerHTML={{ __html: event.eventDetails.venue }}></p>
                        <p dangerouslySetInnerHTML={{ __html: event.eventDetails.venueAddress }}></p>
                    </div>
                    <div className={styles.EventCTA}>
                        <h3>Date & time</h3>
                        <p className={styles.Time}>{event.eventDetails.dateAndTime}</p>
                        <p className={styles.AddToCalender}><span>+</span> Add to Calender</p>
                        <button className={styles.BookBtn}>Book</button>
                        <button className={styles.PromoteBtn}>Share</button>
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

export default NextEventSection

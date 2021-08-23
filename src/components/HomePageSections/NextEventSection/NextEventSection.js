import React, { useState, useEffect } from 'react';
import styles from './NextEventSection.module.scss';
import { getEvents } from '../../../lib/api/events';
import Loader from '../../../UI/Loader/Loader';
import ErrorLoading from '../../../UI/ErrorLoading/ErrorLoading';
import { formatDate } from '../../../lib/utils';

const NextEventSection = ({ singleEvent }) => {

    const [state, setState] = useState({
        loading: true,
        errorLoading: false,
        event: []
    })

    useEffect(() => {

        const fetchEvents = async () => {

            const events = await getEvents();

            if (singleEvent) {
                setState(state => ({ ...state, loading: false, event: singleEvent }))
            } else if (events) {
                //Bring the event date to the first level of the object and format it to a new date
                const modifiedEvents = events.events.nodes.map(event => {
                    return { ...event, dateAndTime: new Date(event.eventDetails.dateAndTime) }
                })

                // Sort the array using the dateAndTime property of the object
                // Sort: smaller date first (chronological order)
                const sortedArray = modifiedEvents.sort((a, b) => a.dateAndTime - b.dateAndTime);

                // Filter out all events that have already passed, that is dates smaller than today;
                const nextEvents = sortedArray.filter(event => event.dateAndTime > new Date());

                // The first event is the the event the represents the next event
                setState(state => ({ ...state, loading: false, event: nextEvents[0] }))

            } else {
                setState(state => ({ ...state, loading: false, error: true }))
            }
        }

        fetchEvents();

    }, [singleEvent])


    const { loading, error, event } = state;



    return (
        <div className={styles.NextEventSection}>
            {!loading && !error &&
                <div className={styles.ContentContainer}
                    style={{ backgroundImage: `url(${event.eventDetails.backgroundImage.sourceUrl})` }}
                >

                    <div className={styles.EventDetails}>

                        {   /** Only show the words "Next Event" if you are not on single event page */
                            !singleEvent && <h5>Next Event</h5>}

                        <h1>{event.title}</h1>

                        {event.eventDetails.host && <h3>By {event.eventDetails.host}</h3>}

                        <p dangerouslySetInnerHTML={{ __html: event.eventDetails.venue }}></p>
                        <p dangerouslySetInnerHTML={{ __html: event.eventDetails.venueAddress }}></p>

                    </div>
                    <div className={styles.EventCTA}>
                        <h3>Date & time</h3>

                        <p className={styles.Time}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg> <span>{formatDate(event.eventDetails.dateAndTime)}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            {formatDate(event.eventDetails.dateAndTime, true)}
                        </p>
                        <button className={styles.BookBtn}>Book</button>
                        <button className={styles.PromoteBtn}>Share</button>
                    </div>

                </div>
            }

            {loading && <Loader />}

            {error && <ErrorLoading />}

        </div>
    )
}

export default NextEventSection

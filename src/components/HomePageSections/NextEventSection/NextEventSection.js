import React, { useState, useEffect } from 'react';
import styles from './NextEventSection.module.scss';
import { getEvents } from '../../../lib/api/events';
import Loader from '../../../UI/Loader/Loader';
import textured_bg from '../../../assets/images/textured_bg.jpg';
import ErrorLoading from '../../../UI/ErrorLoading/ErrorLoading';

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

            {loading && <Loader />}

            {error && <ErrorLoading />}

        </div>
    )
}

export default NextEventSection

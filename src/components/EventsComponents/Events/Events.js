import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Events.module.scss';
import { Container } from '../../../UI/Container';
import { formatDate } from '../../../lib/utils';

const Events = ({ events }) => {

    // change the format and place the dateAndTime of the event on the first level of the event object
    const modifiedEvents = events.map(event => {
        return { ...event, dateAndTime: new Date(event.eventDetails.dateAndTime) }
    })
    // Sort the array using the dateAndTime property of the object
    const sortedArray = modifiedEvents.sort((a, b) => a.dateAndTime - b.dateAndTime);

    return (
        <div className={styles.Events}>
            <Container>
                <div className={styles.EventsContainer}>
                    {events && sortedArray.map(event => (
                        <div className={styles.Event} key={event.id}>
                            <Link to={`/events/${event.slug}`}>
                                <div className={styles.EventBackground}
                                    style={{ backgroundImage: `url(${event.eventDetails.backgroundImage.sourceUrl})` }}
                                >
                                    {event.eventDetails.ticketPrice ?
                                        <div className={styles.TicketPrice}>R {event.eventDetails.ticketPrice}</div>
                                        : <div className={styles.TicketPrice}>Free</div>
                                    }

                                </div>

                                <div className={styles.EventDetails}>

                                    <h2>{event.title}</h2>

                                    <p className={styles.Date}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                        </svg>
                                        {formatDate(event.eventDetails.dateAndTime)}
                                    </p>


                                    <p className={styles.VenueAddress}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg> {event.eventDetails.venue} <br />
                                        {event.eventDetails.venueAddress}
                                    </p>
                                </div>

                            </Link>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

Events.propTypes = {
    events: PropTypes.array.isRequired,
}

export default Events

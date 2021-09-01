import React, { useState, useEffect } from 'react';
import PageHeader from '../../UI/PageHeader/PageHeader';
import events_bg from '../../assets/images/events_bg.jpg';
import textured_bg from '../../assets/images/textured_bg.jpg';
import styles from './EventsPage.module.scss';
import Events from '../../components/EventsComponents/Events/Events';
import { getEvents } from '../../lib/api/events';
import Loader from '../../UI/Loader/Loader';
import ErrorLoading from '../../UI/ErrorLoading/ErrorLoading';

const EventsPage = () => {
    const [state, setState] = useState({
        loading: true,
        error: false,
        events: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const events = await getEvents();
            if (events) {
                setState(state => ({ ...state, loading: false, events: events.events.nodes }))
            } else {
                setState(state => ({ ...state, loading: false, error: true, events: [] }))
            }
        }
        fetchData()
    }, [])

    const { loading, error, events } = state;

    return (
        <div className={styles.Events} style={{ backgroundImage: `url(${textured_bg})` }}>
            <PageHeader label="Events" backgroundImage={events_bg} />

            {!loading && !error && <Events events={events} />}

            {loading && <div className={styles.EventsLoaderContainer}><Loader /></div>}

            {error && <ErrorLoading />}
        </div>
    )
}

export default EventsPage

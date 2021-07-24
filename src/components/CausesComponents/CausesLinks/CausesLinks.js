import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getLastFiveCauses } from '../../../lib/api/causes';
import ViewAllBtn from '../../../UI/ViewAllBtn/ViewAllBtn';
import styles from './CausesLinks.module.scss';

const CausesLinks = () => {
    const [state, setState] = useState({
        loading: true,
        error: false,
        causes: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const causes = await getLastFiveCauses();
            if (causes) {
                setState(state => ({ ...state, loading: false, causes: causes.causes.nodes }))
                // console.log('We have data to work with')
            } else {
                setState(state => ({ ...state, loading: false, error: true }))
                // console.log('No data was returned')
            }

        }
        fetchData();
    }, [])

    const { loading, error, causes } = state;

    return (
        <div className={styles.CausesLinks}>

            {!loading && !error &&
                <>
                    <h2>Causes</h2>
                    <ul>
                        {causes && causes.map(cause => (
                            <li key={cause.id}>
                                <NavLink to={`/causes/${cause.slug}`} activeClassName={styles.Active}>
                                    <div className={styles.BackgroundImg}
                                        style={{ backgroundImage: `url(${cause.featuredImage.node.sourceUrl})` }}
                                    >
                                    </div>
                                    <img src={cause.featuredImage.node.sourceUrl} alt={cause.featuredImage.node.altText} />
                                    <h4>{cause.title}</h4>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <ViewAllBtn label="View All" to="/causes" />
                </>
            }
        </div>
    )
}

export default CausesLinks

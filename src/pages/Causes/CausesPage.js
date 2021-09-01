import React, { useState, useEffect } from 'react';

import { animateScroll as scroll } from 'react-scroll';

import { getAllCauses } from '../../lib/api/causes';
import { LeadParagraph } from '../../UI/LeadParagraph';
import PageHeader from '../../UI/PageHeader/PageHeader';
import styles from './CausesPage.module.scss';
import Causes from '../../components/CausesComponents/Causes/Causes';
import Loader from '../../UI/Loader/Loader';
import ErrorLoading from '../../UI/ErrorLoading/ErrorLoading';
import textured_bg from '../../assets/images/textured_bg.jpg';

const CausesPage = () => {
    const [state, setState] = useState({
        loading: true,
        error: false,
        causes: []
    })

    useEffect(() => {
        const fetchAboutPage = async () => {
            const causes = await getAllCauses();
            if (causes) {
                setState(state => ({ ...state, loading: false, causes: causes.causes.nodes }))
            } else {
                setState(state => ({ ...state, loading: false, error: true }))
            }
        }

        fetchAboutPage();

        scroll.scrollToTop()
    }, [])

    const { loading, error, causes } = state;

    return (
        <div className={styles.Causes} style={{ backgroundImage: `url(${textured_bg})` }}>
            <PageHeader label="Causes" />
            <LeadParagraph content="Rotary is dedicated to causes that build international relationships, improve lives, and create a better world to support our peace efforts and end polio forever." />

            {/** If not loading and no error load causes */
                !loading && !error && <Causes causes={causes} />
            }

            {/** If still loading show the loader */
                loading && <Loader />
            }

            {/** If there is an error loading show this message */
                error && <ErrorLoading />
            }

        </div>
    )
}

export default CausesPage;

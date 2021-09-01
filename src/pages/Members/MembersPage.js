import React, { useState, useEffect } from 'react';

import { animateScroll as scroll } from 'react-scroll';

import PageHeader from '../../UI/PageHeader/PageHeader';
import styles from './MembersPage.module.scss';
import bg_image from '../../assets/images/members.jpg';
import { getMembers } from '../../lib/api/members';
import Members from '../../components/MembersComponents/Members/Members';
import Loader from '../../UI/Loader/Loader';
import ErrorLoading from '../../UI/ErrorLoading/ErrorLoading';

const MembersPage = () => {
    const [state, setState] = useState({
        loading: true,
        error: false,
        members: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const members = await getMembers();
            console.log(members);
            if (members) {
                setState(state => ({ ...state, loading: false, members: members.members.nodes }))
            } else {
                setState(state => ({ ...state, loading: false, error: true, members: [] }))
            }
        }
        fetchData()

        scroll.scrollToTop()
    }, [])

    const { loading, error, members } = state;

    return (
        <div className={styles.Members}>
            <PageHeader label="Members" backgroundImage={bg_image} />

            {!loading && !error && <Members members={members} />}

            {loading && <Loader />}

            {error && <ErrorLoading />}
        </div>
    )
}

export default MembersPage

import React from 'react';
import PageHeader from '../../UI/PageHeader/PageHeader';
import styles from './MembersPage.module.scss';
import bg_image from '../../assets/images/members.jpg';

const MembersPage = () => {
    return (
        <div className={styles.Members}>
            <PageHeader label="Members" backgroundImage={bg_image} />
        </div>
    )
}

export default MembersPage

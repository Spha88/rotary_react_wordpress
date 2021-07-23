import React from 'react';
import LeadParagraph from '../../UI/LeadParagraph/LeadParagraph';
import PageHeader from '../../UI/PageHeader/PageHeader';
import styles from './Causes.module.scss';

const Causes = () => {
    return (
        <div className={styles.Causes}>
            <PageHeader label="Causes" />
            <LeadParagraph content="Rotary is dedicated to causes that build international relationships, improve lives, and create a better world to support our peace efforts and end polio forever." />
        </div>
    )
}

export default Causes

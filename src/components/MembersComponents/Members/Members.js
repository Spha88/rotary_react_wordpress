import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../../UI/Container';
import styles from './Members.module.scss';

const Members = ({ members }) => {
    return (
        <Container>
            <div className={styles.Members}>
                {members && members.map(member => (
                    <div className={styles.MemberCard} key={member.id}>
                        <div className={styles.ProPic}
                            style={{ backgroundImage: `url(${member.memberDetails.profilePicture.sourceUrl})` }}
                        >
                        </div>
                        <h2><Link to={`/members/${member.slug}`}>{member.memberDetails.names} {member.memberDetails.surname}</Link></h2>
                        <h5>{member.memberDetails.position && member.memberDetails.position}</h5>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Members

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { Container } from '../../../UI/Container';
import PageHeader from '../../../UI/PageHeader/PageHeader';
import members from '../../../assets/images/members.jpg';
import styles from './MemberSinglePage.module.scss'
import { getSingleMember } from '../../../lib/api/members';


const MemberSinglePage = () => {

    const { slug } = useParams();
    const [state, setState] = useState({
        loading: true,
        error: false,
        member: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const member = await getSingleMember(slug);
            if (member) {
                setState(state => ({ ...state, loading: false, member: member }))
            } else {
                setState(state => ({ ...state, loading: false, error: true }))
            }
        }
        fetchData()
    }, [slug])

    const { loading, error, member } = state;

    console.log(member && member)

    return (
        <div className={styles.MemberSinglePage}>
            <PageHeader label="Members" backgroundImage={members} />
            <Container>
                <div className={styles.MemberPage}>
                    <div className={styles.Content}>
                        {!loading && !error && (
                            <div className={styles.MemberContainer}>
                                <header>
                                    <h2>{member.memberDetails.names + " " + member.memberDetails.surname}</h2>
                                    <h5>{member.memberDetails.position}</h5>
                                    <p>Active since {member.memberDetails.joiningDate}</p>
                                </header>

                                <div className={styles.MemberDetails}>
                                    <div className={styles.MemberImage}>
                                        <img src={member.memberDetails.profilePicture.sourceUrl}
                                            alt={member.memberDetails.profilePicture.altText ? member.memberDetails.profilePicture.altText : "profile picture"}
                                        />
                                    </div>
                                    <div className={styles.Bio} dangerouslySetInnerHTML={{ __html: member.memberDetails.rotaryBio }}></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default MemberSinglePage

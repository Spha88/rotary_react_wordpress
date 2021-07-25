import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSinglePost } from '../../../lib/api/posts';
import PageHeader from '../../../UI/PageHeader/PageHeader';
import { Container } from '../../../UI/Container';
import styles from './NewsSinglePage.module.scss';
import { formatDate } from '../../../lib/utils';
import CausesLinks from '../../../components/CausesComponents/CausesLinks/CausesLinks';
import ImportantLinks from '../../../components/ImportantLinks/ImportantLinks';
import LatestNewsLinks from '../../../components/NewsComponents/LatestNewsLinks/LatestNewsLinks';

const NewsSinglePage = () => {
    const { slug } = useParams();
    const [state, setState] = useState({
        loading: true,
        error: false,
        post: []
    })
    useEffect(() => {
        const fetchData = async () => {
            const post = await getSinglePost(slug);
            if (post) {
                setState(state => ({ ...state, loading: false, post: post }))
            } else {
                setState(state => ({ ...state, loading: false, error: true }))
            }
        }
        fetchData()
    }, [slug])

    const { loading, error, post } = state;

    return (
        <div className={styles.NewsSinglePage}>
            <PageHeader label="News" backgroundImage={post.featuredImage && post.featuredImage.node.sourceUrl} />
            <Container>
                <div className={styles.Layout}>
                    <div className={styles.Main}>
                        {!loading && !error &&
                            <article>
                                <h2>{post.title}</h2>

                                <p className={styles.Date}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {formatDate(post.date)}
                                </p>

                                <p className={styles.Author}>By {post.author.node.firstName + " " + post.author.node.lastName}</p>

                                <a href={post.featuredImage.node.sourceUrl} target="_blank" rel="noopener noreferrer">
                                    <img src={post.featuredImage.node.sourceUrl} alt={post.featuredImage.node.altText} />
                                </a>
                                <section className={styles.Content} dangerouslySetInnerHTML={{ __html: post.content }} />
                            </article>
                        }
                    </div>
                    <aside>
                        <LatestNewsLinks />
                        <CausesLinks />
                        <ImportantLinks />
                    </aside>
                </div>
            </Container>
        </div>
    )
}

export default NewsSinglePage

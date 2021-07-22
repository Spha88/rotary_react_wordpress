import React, { useState, useEffect } from 'react';
import styles from './LatestStories.module.scss';
import { Container } from '../../UI/Container';
import { getLatestPosts } from '../../lib/api/posts';
import { extractor, formatDate, removeTags } from '../../lib/utils';

const LatestStories = () => {
    const [state, setState] = useState({
        loading: true,
        error: false,
        posts: []
    })

    useEffect(() => {
        const fetchAboutPage = async () => {
            const latestPosts = await getLatestPosts();
            if (latestPosts) {
                setState(state => ({ ...state, loading: false, posts: latestPosts.posts.nodes }))
                // console.log('We have data to work with')
            } else {
                setState(state => ({ ...state, loading: false, error: true }))
                // console.log('No data was returned')
            }
        }
        fetchAboutPage();
    }, [])

    const { loading, error, posts } = state;

    return (
        <div className={styles.LatestStories}>
            {
                !loading && !error &&
                <Container>
                    <h1>Latest Stories</h1>
                    <div className={styles.Content}>

                        {/** First post show in this element */}
                        <div className={styles.LastStory} style={{ backgroundImage: `url(${posts[0].featuredImage.node.sourceUrl})` }}>
                            <div className={styles.LastStoryContent}>
                                <h1>{posts[0].title}</h1>
                                <p className={styles.LastPostDate}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {formatDate(posts[0].date)}
                                </p>
                                <a href="http://" target="_blank" rel="noopener noreferrer">Read More</a>
                            </div>
                        </div>

                        <div className={styles.LastTwoStories}>
                            {
                                /** do not show the first post (index !== 0 ), only show the last two */
                                posts.map((post, index) => (
                                    index !== 0 &&
                                    <div className={styles.Story} key={post.id}>
                                        <img src={post.featuredImage.node.sourceUrl} alt="" />
                                        <div className={styles.Details}>
                                            <p className={styles.Time}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {formatDate(post.date)}
                                            </p>
                                            <h3>{post.title}</h3>
                                            <div dangerouslySetInnerHTML={{ __html: extractor(removeTags(post.content)) }} />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </Container>
            }
        </div>
    )
}

export default LatestStories

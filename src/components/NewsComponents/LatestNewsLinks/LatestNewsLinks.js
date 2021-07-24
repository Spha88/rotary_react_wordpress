import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './LatestNewsLinks.module.scss';
import { getLastFivePosts } from '../../../lib/api/posts';
import { formatDate } from '../../../lib/utils';

const LatestNewsLinks = () => {
    const [state, setState] = useState({
        loading: true,
        error: false,
        posts: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const posts = await getLastFivePosts();
            if (posts) {
                setState(state => ({ ...state, loading: false, posts: posts.posts.nodes }))
            } else {
                setState(state => ({ ...state, loading: false, error: true }))
            }
        }
        fetchData();
    }, [])

    const { loading, error, posts } = state;
    console.log(posts && posts);
    return (
        <div className={styles.LatestNewsLinks}>
            <h2>Latest News</h2>
            <ul>
                {!loading && !error && posts.map(post => (
                    <li>
                        <Link to={`/news/${post.slug}`} className={styles.Link}>
                            <img src={post.featuredImage.node.sourceUrl}
                                alt={post.featuredImage.node.altText}
                            />
                            <div className={styles.LinkDetails}>
                                <p className={styles.Time}>{formatDate(post.date)}</p>
                                <h2>{post.title}</h2>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LatestNewsLinks

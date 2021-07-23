import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './News.module.scss';
import { getAllPosts } from '../../lib/api/posts'
import { Container } from '../../UI/Container'
import LeadParagraph from '../../UI/LeadParagraph/LeadParagraph'
import PageHeader from '../../UI/PageHeader/PageHeader'
import { extractor, formatDate, removeTags } from '../../lib/utils';
import textured_bg from '../../assets/images/textured_bg.jpg';

const News = () => {
    const [state, setState] = useState({
        loading: true,
        error: false,
        posts: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const posts = await getAllPosts();
            console.log(posts);
            if (posts) {
                setState(state => ({ ...state, loading: false, posts: posts.posts.nodes }))
            } else {
                setState(state => ({ ...state, loading: false, error: true }))
            }
        }

        fetchData()
    }, [])

    const { posts, loading, error } = state;

    console.log(posts);

    return (
        <div className={styles.News} style={{ backgroundImage: `url(${textured_bg})` }}>
            <PageHeader label="Latest News from Rotary Port Alfred" />
            <LeadParagraph content="We write about the rotary activities on this page, so if you want to know what we have been up to recently, this is the right place." />
            <Container>
                <div className={styles.NewsLayout}>
                    <div className={styles.Articles}>
                        {!loading && !error && posts.map(post => (
                            <article key={post.id}>
                                <div className={styles.ArticleFeaturedImage}
                                    style={{ backgroundImage: `url(${post.featuredImage.node.sourceUrl})` }}
                                ></div>
                                <div className={styles.ArticleContent}>
                                    <p>{formatDate(post.date)}</p>
                                    <h3>{post.title}</h3>
                                    <div dangerouslySetInnerHTML={{ __html: extractor(removeTags(post.excerpt), 30) }}></div>
                                    <Link to={`/news/${post.slug}`}>Read more</Link>
                                </div>
                            </article>
                        ))
                        }
                    </div>
                    <aside>

                    </aside>
                </div>
            </Container>
        </div>
    )
}

export default News

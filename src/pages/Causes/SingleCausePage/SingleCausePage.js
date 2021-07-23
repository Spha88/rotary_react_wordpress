import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getSingleCause } from '../../../lib/api/causes';
import styles from './SingleCausePage.module.scss'
import PageHeader from '../../../UI/PageHeader/PageHeader';
import { Container } from '../../../UI/Container';
import Loader from '../../../UI/Loader/Loader';
import ErrorLoading from '../../../UI/ErrorLoading/ErrorLoading';
import CausesLinks from '../../../components/CausesComponents/CausesLinks/CausesLinks';

const SingleCausePage = () => {
    const { slug } = useParams();
    const [state, setState] = useState({
        loading: true,
        error: false,
        cause: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const cause = await getSingleCause(slug);
            if (cause) {
                setState(state => ({ ...state, loading: false, cause: cause.cause }))
                // console.log('We have data to work with')
            } else {
                setState(state => ({ ...state, loading: false, error: true }))
                // console.log('No data was returned')
            }
        }
        fetchData();
    }, [slug])

    const { cause, loading, error } = state;

    return (
        <div className={styles.SingleCausePage}>
            <PageHeader
                label={`${cause.title ? cause.title : 'Our Causes'}`}
                backgroundImage={cause.featuredImage && cause.featuredImage.node.sourceUrl}
            />
            <Container>
                <div className={styles.PageLayout}>
                    <div className={styles.ArticleContainer}>
                        {!loading && !error &&
                            <article>
                                <div className={styles.FeaturedImage} style={{ backgroundImage: `url(${cause.featuredImage.node.sourceUrl})` }}></div>
                                <img src={cause.featuredImage.node.sourceUrl} alt={cause.featuredImage.node.altText} />
                                <div dangerouslySetInnerHTML={{ __html: cause.content }} />
                            </article>
                        }

                        {/** If still loading show the loader */
                            loading && <Loader />
                        }

                        {/** If there is an error loading show this message */
                            error && <ErrorLoading />
                        }
                    </div>
                    <aside>
                        <CausesLinks />
                    </aside>
                </div>
            </Container>
        </div>
    )
}

export default SingleCausePage

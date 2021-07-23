import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Causes.module.scss';
import { extractor, removeTags } from '../../../lib/utils';
import { Container } from '../../../UI/Container';


const Causes = ({ causes }) => {

    return (
        <div className={styles.Causes}>
            <Container>
                <div className={styles.Cards}>
                    {causes && causes.map(cause => (
                        <div className={styles.Card} key={cause.id}>
                            <div className={styles.CardImage} style={{ backgroundImage: `url(${cause.featuredImage.node.sourceUrl})` }}></div>
                            <div className={styles.CardBody} >
                                <h1>{cause.title}</h1>
                                <p dangerouslySetInnerHTML={{ __html: extractor(removeTags(cause.content), 25) }}></p>
                                <Link to={`/causes/${cause.slug}`} rel="noopener noreferrer">Read more</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Causes;
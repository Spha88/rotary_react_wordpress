import React, { useEffect, useState } from 'react';

export const LeadParagraph = ({ content }) => {

    const mediaMatch = window.matchMedia('(max-width: 425px');

    // Set initial match to initial state
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
        // add lister to the match when the component was been loaded / mounted. 
        const handler = e => setMatches(e.matches);
        mediaMatch.addEventListener("change", handler);

        // remove the listener when component unloads (unmount)
        return () => mediaMatch.removeEventListener("change", handler);
    })

    return (
        <div style={styles.container(matches)}>
            <p style={pStyles}>{content}</p>
        </div>
    )
}

const styles = {
    container: isMobile => ({
        maxWidth: '700px',
        margin: '0 auto',
        // set styles according to the match
        padding: isMobile ? '1rem 2rem' : '2rem 1rem',
        fontSize: isMobile ? '1.1rem' : '1.6rem',
        fontWeight: '400',
        lineHeight: 10,
        textAlign: 'center',
    })
}

const pStyles = {
    lineHeight: '1.3'
}

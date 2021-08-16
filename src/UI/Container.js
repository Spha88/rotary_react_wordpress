import React, { useState, useEffect } from 'react';

export const Container = ({ children }) => {

    const matchMedia = window.matchMedia('(max-width: 1024px)');
    console.log(matchMedia);

    const [matches, setMatch] = useState(matchMedia.matches)

    useEffect(() => {
        const handler = e => setMatch(e.matches);
        matchMedia.addEventListener('change', handler);
        return () => matchMedia.removeEventListener('change', handler);
    })

    const styles = {
        container: isTablet => ({
            maxWidth: "1200px",
            width: "100vw",
            margin: "0 auto",
            padding: isTablet ? "0 1em" : "0"
        })
    }
    return (
        <div style={styles.container(matches)}>
            {children}
        </div>
    )
}

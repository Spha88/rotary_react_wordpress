import React from 'react';
const styles = {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '2rem 1rem',
    fontWeight: '400',
    fontSize: '1.6rem',
    lineHeight: 10,
    textAlign: 'center',
}

const pStyles = {
    lineHeight: '1.3'
}

const LeadParagraph = ({ content }) => {
    return (
        <div style={styles}>
            <p style={pStyles}>{content}</p>
        </div>
    )
}

export default LeadParagraph

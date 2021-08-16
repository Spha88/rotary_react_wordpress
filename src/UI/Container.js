import React from 'react';

export const Container = ({ children }) => {
    const style = {
        maxWidth: "1200px",
        width: "100%",
        margin: "0 auto",
        padding: "0 1em"
    }
    return (
        <div style={style}>
            {children}
        </div>
    )
}

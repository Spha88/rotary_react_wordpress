import React from 'react';

export const Container = ({ children }) => {
    const style = {
        maxWidth: "1200px",
        width: "100%",
        margin: "0 auto",
    }
    return (
        <div style={style}>
            {children}
        </div>
    )
}

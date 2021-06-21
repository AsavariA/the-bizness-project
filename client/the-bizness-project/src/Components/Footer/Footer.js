import React from 'react'

const Footer = () => {
    const footerStyles = {
        background: '#f1f1f1',
        bottom: '0',
        width: '100%',
        height: '5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <div style={footerStyles}>
            <h4 style={{ textAlign: 'center', fontWeight: 'lighter' }}>Asavari Ambavane | The Bizness Project</h4>
        </div>
    )
}

export default Footer

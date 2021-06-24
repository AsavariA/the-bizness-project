import React from 'react'

const Footer = () => {
    const footerStyles = {
        backgroundColor: '#00002f',
        bottom: '0',
        width: '100%',
        height: '5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <div style={footerStyles}>
            <h4 style={{ textAlign: 'center', fontWeight: 'lighter', color:'white' }}>Asavari Ambavane | The Bizness Project</h4>
        </div>
    )
}

export default Footer

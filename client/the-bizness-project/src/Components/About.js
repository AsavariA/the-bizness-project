import React from 'react'
import { Typography, Link } from '@material-ui/core';

const About = () => {
    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 15vw' }}>
            <div style={{ textAlign: 'center' }}>
                <Typography variant="h4">The Bizness Project</Typography>
                <div style={{ textAlign: 'left', margin: '2vw 0' }}>
                    <Typography variant="h6">
                        This project does not serve any commercial purposes. It is only for the sake of learning and experimenting. This is a full stack demo webapp which allows users to create and edit their biznesses. We aim to keep improving this project and implementing more and more features to this.
                        Liking, chatting, reviews and search are a few features in development still.
                        Anyone can experiment with this webapp, create their own businesses and provide suggestions for improvement.
                    </Typography>
                </div>
                <Typography variant="subtitle1">Github repository <Link href="https://github.com/AsavariA/the-bizness-project">here</Link></Typography>
            </div>
        </div>
    )
}

export default About

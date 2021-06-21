import React from 'react'
import { useParams } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive'
import { makeStyles } from '@material-ui/core/styles';
import Loader from "react-loader-spinner";

const useStyles = makeStyles({
    root: {
        minWidth: 245,
        maxWidth: 245,
        margin: 'auto',
        background: 'linear-gradient(150deg, rgba(221,250,231,1) 0%, rgba(247,255,255,1) 100%)'
    },
    media: {
        height: 200,
    },
});

const BiznessDetails = ({ biznesses }) => {
    const classes = useStyles();
    const biznessId = useParams();
    const bizness = biznesses.find(x => x._id === biznessId.id);
    console.log(bizness)
    const isResponsive = useMediaQuery({ query: '(max-width: 900px)' });

    const topStyles = {
        background: 'rgba(221,250,231,1)',
        bottom: '0',
        width: '100%',
        textAlign: 'center',
        padding: '4rem 0.5rem'
    }

    const productsStyles = {
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gridGap: '2rem',
        padding: isResponsive ? '3rem 1rem' : '3rem 2rem',
        alignItems: 'center',
        justifyContent: 'center',
        placeItems: 'center'
    }

    const bottomStyles = {
        background: 'rgba(221,250,231,1)',
        bottom: '0',
        width: '100%',
        textAlign: 'center',
        padding: '2rem 0.5rem'
    }

    return (
        <div>
            {!bizness
                ? <div style={{ height: '80vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Loader
                        type="ThreeDots"
                        color="#07134B"
                        height={100}
                        width={100}
                    />
                </div>
                : <div>
                    <div style={topStyles}>
                        <h1>{bizness.name.toUpperCase()}</h1>
                        <br></br>
                        <h3>{bizness.description}</h3>
                    </div>
                    <div style={productsStyles} >
                        {
                            bizness.products.map((product) => {
                                return <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={product.photo}
                                            title={product.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6">{product.name}</Typography>
                                            <Typography variant="body1" color="textSecondary" component="p">{`Rs. ${product.price}`}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            })
                        }
                    </div>
                    <div style={bottomStyles}>
                        <h4>By {bizness.owner} at {bizness.contact}</h4>
                    </div>
                </div>
            }
        </div>
    )
}

export default BiznessDetails

import React, { useState } from 'react';
import { Card, CardActions, CardHeader, CardContent, CardMedia, IconButton, Chip, Avatar, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './styles';

const Bizness = ({ bizness }) => {
    const classes = useStyles();
    const [like, setLike] = useState(false);

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar alt="Business Logo" src={bizness.logo} />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={bizness.name}
                subheader={`by ${bizness.owner}`}
            />
            <CardMedia
                className={classes.media}
                image={bizness.products[0].photo}
                title={bizness.name}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{bizness.description}</Typography>
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>Contact: {bizness.contact}</Typography>
                {bizness.tags[0] !== '' ? bizness.tags.split(',').map((data) => {
                    return (
                        <Chip
                            size="small"
                            className={classes.chip}
                            avatar={<Avatar>{data[0]}</Avatar>}
                            label={data}
                            color="secondary"
                        />
                    );
                }) : null}
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={() => { setLike(!like) }} >
                    <FavoriteIcon style={like ? { color: 'red' }: { color: 'grey' }}/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Bizness

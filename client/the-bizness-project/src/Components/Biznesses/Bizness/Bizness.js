import React, { useState } from 'react';
import { Card, CardActions, CardHeader, CardContent, CardMedia, IconButton, Chip, Avatar, Typography, Tooltip, Link } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './styles';

const Bizness = ({ bizness, setcurrentId, setFormActive }) => {
    const classes = useStyles();
    const [like, setLike] = useState(false);

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar alt="Business Logo" src={bizness.logo} />
                }
                action={
                    <Tooltip title="View More">
                        <Link href={`/${bizness._id}`}>
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        </Link>
                    </Tooltip>
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
                            key={data}
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
                <Tooltip title="Edit Business">
                    <IconButton aria-label="edit" onClick={() => { setcurrentId(bizness._id); setFormActive(true) }}>
                        <EditIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Add to Favourites">
                    <IconButton aria-label="add to favorites" onClick={() => { setLike(!like) }} >
                        <FavoriteIcon style={like ? { color: 'red' } : { color: 'grey' }} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Share">
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    )
}

export default Bizness

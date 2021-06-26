import React, { useState } from 'react';
import { Card, CardActions, CardHeader, CardContent, CardMedia, IconButton, Chip, Avatar, Typography, Tooltip, Link } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { deleteBizness } from '../../../actions/biznessesAction'

const Bizness = ({ bizness, setcurrentId, setFormActive }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [like, setLike] = useState(false);
    const user = JSON.parse(localStorage.getItem('profile'));

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
                subheader={`by ${bizness.ownerName}`}
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
                <Tooltip title="View More">
                    <Link href={`/${bizness._id}`}>
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    </Link>
                </Tooltip>
                <Tooltip title="Add to Favourites">
                    <IconButton aria-label="add to favorites" onClick={() => { setLike(!like) }} >
                        <FavoriteIcon style={like ? { color: 'red' } : { color: 'grey' }} />
                    </IconButton>
                </Tooltip>
                {(user?.result?.googleId === bizness?.owner || user?.result?._id === bizness?.owner) && (
                    <Tooltip title="Edit Business">
                        <IconButton aria-label="edit" onClick={() => { setcurrentId(bizness._id); setFormActive(true) }}>
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                )}
                {(user?.result?.googleId === bizness?.owner || user?.result?._id === bizness?.owner) && (
                    <Tooltip title="Delete">
                        <IconButton aria-label="delete" onClick={() => dispatch(deleteBizness(bizness._id))}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                )}
            </CardActions>
        </Card>
    )
}

export default Bizness

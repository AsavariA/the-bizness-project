import React from 'react';
import { Card, CardActions, CardHeader, CardContent, CardMedia, IconButton, Chip, Avatar, Typography, Tooltip, Link, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import NotesIcon from '@material-ui/icons/Notes';
import ShareIcon from '@material-ui/icons/Share';
import EditIcon from '@material-ui/icons/Edit';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { deleteBizness } from '../../../actions/biznessesAction'
import { WhatsappIcon, WhatsappShareButton, FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, TelegramShareButton, TelegramIcon } from "react-share";

const Bizness = ({ bizness, setcurrentId, setFormActive }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const url = `/${bizness._id}`
    const text = `Hey there! Check out this awesome business! \n\n *${bizness.name} by ${bizness.ownerName}* : \n\n`

    return (
        <Card className={classes.root}>
            <ToastContainer />
            <CardHeader
                avatar={
                    <Avatar alt="Business Logo" src={bizness.logo} />
                }
                action={
                    <Tooltip title="View More">
                        <Link href={`/${bizness._id}`}>
                            <IconButton aria-label="settings">
                                <NotesIcon />
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
                            <NotesIcon />
                        </IconButton>
                    </Link>
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
                <Tooltip title="Share">
                    <IconButton aria-label="share" onClick={handleClickOpen}>
                        <ShareIcon />
                    </IconButton>
                </Tooltip>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Share via -</DialogTitle>
                    <DialogContent>
                        <div style={{ display: 'flex' }}>
                            <div style={{ margin: '0 0.5rem' }}>
                                <WhatsappShareButton url={url} title={text}>
                                    <WhatsappIcon size={32} />
                                </WhatsappShareButton>
                            </div>
                            <div style={{ margin: '0 0.5rem' }}>
                                <FacebookShareButton url={url} quote={text}>
                                    <FacebookIcon size={32} />
                                </FacebookShareButton>
                            </div>
                            <div style={{ margin: '0 0.5rem' }}>
                                <LinkedinShareButton url={url} title={text}>
                                    <LinkedinIcon size={32} />
                                </LinkedinShareButton>
                            </div>
                            <div style={{ margin: '0 0.5rem' }}>
                                <TelegramShareButton url={url} title={text}>
                                    <TelegramIcon size={32} />
                                </TelegramShareButton>
                            </div>
                            <div style={{ margin: '0 0.5rem' }}>
                                <Tooltip title="Copy Link to clipboard">
                                    <CopyToClipboard text={url}
                                        onCopy={() => toast.success('Url copied to clipboard!')}>
                                        <FileCopyIcon />
                                    </CopyToClipboard>
                                </Tooltip>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </CardActions>
        </Card>
    )
}

export default Bizness

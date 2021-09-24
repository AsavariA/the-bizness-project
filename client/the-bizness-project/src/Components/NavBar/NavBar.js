import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, Link, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WorkIcon from '@material-ui/icons/Work';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import HomeIcon from '@material-ui/icons/Home';
import StarIcon from '@material-ui/icons/Star';
import ReactRoundedImage from "react-rounded-image";
import Userimage from "../../assets/userimage.jpg";
import Noimage from "../../assets/noimage.jpg";
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode'

const NavBar = ({ setFormActive }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [drawerState, setDrawerState] = React.useState({ left: false });
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        history.push('/')
        setUser(null)
    }

    useEffect(() => {
        const token = user?.token
        setUser(JSON.parse(localStorage.getItem('profile')))
        if (token) {
            const decodedToken = decode(token)
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        // eslint-disable-next-line
    }, [location])

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerState({ ...drawerState, 'left': open });
    };

    const list = (anchor) => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div style={{ margin: '2rem' }}>
                <ReactRoundedImage
                    image={user ? Userimage : Noimage}
                    roundedColor="#321124"
                    imageWidth="150"
                    imageHeight="150"
                    roundedSize="4"
                    borderRadius="100"
                />
            </div>
            <Typography className={classes.drawername} variant="h6" noWrap>
                {user ? `${user?.result.name}` : 'Guest'}
            </Typography>
            <Typography className={classes.drawername} variant="body1" noWrap>
                {user ? `${user?.result.email}` : 'guest@email.com'}
            </Typography>
            <br></br>
            <List>
                <Link href='/'>
                    <ListItem button key='Home' onClick={() => setFormActive(false)}>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItem>
                </Link>
                {user
                    ? <Link href='/profile'>
                        <ListItem button key='Profile'>
                            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                            <ListItemText primary='Profile' />
                        </ListItem>
                    </Link>
                    : null}
                <Link href='/createBizness'>
                    <ListItem button key='Create Biz' onClick={() => setFormActive(true)}>
                        <ListItemIcon><WorkIcon /></ListItemIcon>
                        <ListItemText primary='Create Biz' />
                    </ListItem>
                </Link>
                {user ? (
                    <ListItem button key='Logout' onClick={logout}>
                        <ListItemIcon><VpnKeyIcon /></ListItemIcon>
                        <ListItemText primary='Logout' />
                    </ListItem>
                ) : (
                    <Link href='/auth'>
                        <ListItem button key='Sign In'>
                            <ListItemIcon><VpnKeyIcon /></ListItemIcon>
                            <ListItemText primary='Sign In' />
                        </ListItem>
                    </Link>
                )}
            </List>
            <Divider />
            <List>
                <Link href='/about'>
                    <ListItem button key='About'>
                        <ListItemIcon><SupervisorAccountIcon /></ListItemIcon>
                        <ListItemText primary='About' />
                    </ListItem>
                </Link>
                <Link href='https://github.com/AsavariA/the-bizness-project'>
                    <ListItem button key='Github'>
                        <ListItemIcon><StarIcon /></ListItemIcon>
                        <ListItemText primary='Github' />
                    </ListItem>
                </Link>
            </List>
        </div>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        onClick={toggleDrawer(true)}
                        color="inherit"
                        aria-label="open drawer">
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor='left' open={drawerState['left']} classes={{ paper: classes.paper }} onClose={toggleDrawer(false)}>{list('left')}</Drawer>
                    <Link href='/'>
                        <Typography className={classes.title} variant="h6" noWrap>
                            The Bizness Project
                        </Typography>
                    </Link>
                    <div className={classes.grow} />
                    <div>
                        {
                            user ? (
                                <Button className={classes.button} variant="contained" color="secondary" onClick={logout}>
                                    Logout
                                </Button>
                            ) : (
                                <Link href='/auth'>
                                    <Button className={classes.button} variant="contained" color="secondary">
                                        Sign In
                                    </Button>
                                </Link>
                            )
                        }
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar

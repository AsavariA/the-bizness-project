import React,{ useState, useEffect} from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, InputBase, Drawer, List, Link, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WorkIcon from '@material-ui/icons/Work';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import HomeIcon from '@material-ui/icons/Home';
import ReactRoundedImage from "react-rounded-image";
import Userimage from "../../assets/userimage.jpg";
import Noimage from "../../assets/noimage.jpg";
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import {useHistory, useLocation} from 'react-router-dom';

const NavBar = ({ setFormActive }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [drawerState, setDrawerState] = React.useState({ left: false });
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    useEffect(() => {
        const token = user?.token
        setUser(JSON.parse(localStorage.getItem('profile')))
        // eslint-disable-next-line
    }, [location])

    const logout = () => {
        dispatch({type: 'LOGOUT'})
        history.push('/')
        setUser(null)
    }

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
                <ListItem button key='Profile'>
                    <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                    <ListItemText primary='Profile' />
                </ListItem>
                <Link href='/createBizness'>
                    <ListItem button key='Create Biz' onClick={() => setFormActive(true)}>
                        <ListItemIcon><WorkIcon /></ListItemIcon>
                        <ListItemText primary='Create Biz' />
                    </ListItem>
                </Link>
                <ListItem button key='Favourites'>
                    <ListItemIcon><FavoriteIcon /></ListItemIcon>
                    <ListItemText primary='Favourites' />
                </ListItem>
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
                <ListItem button key='FAQs'>
                    <ListItemIcon><HelpIcon /></ListItemIcon>
                    <ListItemText primary='FAQs' />
                </ListItem>
                <ListItem button key='About Us'>
                    <ListItemIcon><SupervisorAccountIcon /></ListItemIcon>
                    <ListItemText primary='About Us' />
                </ListItem>
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
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
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

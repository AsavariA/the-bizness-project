import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Drawer, List, Link, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WorkIcon from '@material-ui/icons/Work';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import ReactRoundedImage from "react-rounded-image";
import Elephant from "../../assets/elephant.jpg";
import useStyles from './styles';

const NavBar = ({ setFormActive }) => {
    const classes = useStyles();
    const [drawerState, setDrawerState] = React.useState({ left: false });

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
                    image={Elephant}
                    roundedColor="#321124"
                    imageWidth="150"
                    imageHeight="150"
                    roundedSize="4"
                    borderRadius="100"
                />
            </div>
            <Typography className={classes.drawername} variant="h6" noWrap>
                Guest
            </Typography>
            <Typography className={classes.drawername} variant="body1" noWrap>
                guest@email.com
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
                    <Typography className={classes.title} variant="h6" noWrap>
                        The Bizness Project
                    </Typography>
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
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar

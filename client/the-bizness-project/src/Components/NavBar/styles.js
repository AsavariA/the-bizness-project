import {fade, makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    grow: {
        flexGrow: 2,
      },
      title: {
        display: 'block',
        color: 'white',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
          marginLeft: theme.spacing(3),
        },
      },
      button: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      drawername: {
          display: 'block',
          marginLeft: theme.spacing(3),
      },
      paper: {
        background: 'linear-gradient(225deg, rgba(221,250,231,1) 0%, rgba(247,255,255,1) 100%)'
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(5),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(5),
          width: '30%',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
      list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      },
}))
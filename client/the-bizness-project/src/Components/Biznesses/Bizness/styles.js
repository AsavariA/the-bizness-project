import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(225deg, rgba(221,250,231,1) 0%, rgba(247,255,255,1) 100%)',
    minWidth: 345,
    maxWidth: 345,
    margin: 'auto'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: '#07134B',
  },
  chip: {
    marginRight: '10px',
    marginBottom: '10px'
  }
}));
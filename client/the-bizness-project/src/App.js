import React, {useEffect} from 'react'
import NavBar from './Components/NavBar/NavBar';
import Form from './Components/Form/Form';
import Biznesses from './Components/Biznesses/Biznesses'
import {useDispatch} from 'react-redux';
import {getBiznesses} from './actions/biznessesAction'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#07134B'
          },
        secondary: {
            main: '#AFF9C9'
          }
    }
  });

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBiznesses());
    },[dispatch])

    const styles = {
        display:'flex', justifyContent: 'space-evenly', margin: '1rem'
    }

    return (
        <MuiThemeProvider theme={theme}>
            <NavBar />
            <div style={styles}>
                <Biznesses />
                <Form />
            </div>
        </MuiThemeProvider>
    )
}

export default App

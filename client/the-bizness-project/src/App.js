import React, { useEffect } from 'react'
import NavBar from './Components/NavBar/NavBar';
import Form from './Components/Form/Form';
import Biznesses from './Components/Biznesses/Biznesses'
import { useDispatch } from 'react-redux';
import { getBiznesses } from './actions/biznessesAction'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
    }, [dispatch])

    return (
        <Router>
            <MuiThemeProvider theme={theme}>
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <Biznesses />
                    </Route>
                    <Route path="/createBizness">
                        <Form />
                    </Route>
                </Switch>
            </MuiThemeProvider>
        </Router>
    )
}

export default App

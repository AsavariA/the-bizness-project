import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar/NavBar';
import Form from './Components/Form/Form';
import Biznesses from './Components/Biznesses/Biznesses'
import { useDispatch } from 'react-redux';
import { getBiznesses } from './actions/biznessesAction'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

const font = "'Nunito', sans-serif";
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#07134B'
        },
        secondary: {
            main: '#AFF9C9'
        }
    },
    typography: {
        fontFamily: font,
    }
});

const App = () => {
    const dispatch = useDispatch();
    const [currentId, setcurrentId] = useState(null);
    const [formActive, setFormActive] = useState(false)

    useEffect(() => {
        dispatch(getBiznesses());
    }, [currentId, dispatch])

    return (
        <Router>
            <MuiThemeProvider theme={theme}>
                <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
                    <NavBar setFormActive={setFormActive} />
                    <Switch>
                        <Route exact path="/">
                            {
                                formActive ? <Form currentId={currentId} setcurrentId={setcurrentId} setFormActive={setFormActive} />
                                    : <Biznesses setcurrentId={setcurrentId} setFormActive={setFormActive} />
                            }
                        </Route>
                    </Switch>
                    <Footer />
                </div>
            </MuiThemeProvider>
        </Router>
    )
}

export default App

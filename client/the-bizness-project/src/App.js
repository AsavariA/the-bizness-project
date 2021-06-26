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
import { useSelector } from 'react-redux';
import BiznessDetails from './Components/Biznesses/Bizness/BiznessDetails';
import Auth from './Components/Auth/Auth'
import Profile from './Components/Profile/Profile'

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
    const [formActive, setFormActive] = useState(false);
    const biznesses = useSelector((state) => state.biznessesReducers);

    useEffect(() => {
        dispatch(getBiznesses());
    }, [currentId, dispatch])

    return (
        <Router>
            <MuiThemeProvider theme={theme}>
                <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'aliceblue'}}>
                    <NavBar setFormActive={setFormActive} />
                    <Switch>
                        <Route exact path="/">
                            {
                                formActive ? <Form currentId={currentId} setcurrentId={setcurrentId} setFormActive={setFormActive} />
                                    : <Biznesses setcurrentId={setcurrentId} setFormActive={setFormActive} biznesses={biznesses}/>
                            }
                        </Route>
                        <Route exact path="/createBizness">
                            <Form currentId={null} setcurrentId={setcurrentId} setFormActive={setFormActive} />
                        </Route>
                        <Route exact path="/auth">
                            <Auth />
                        </Route>
                        <Route exact path="/profile">
                            <Profile />
                        </Route>
                        <Route exact path="/:id">
                            <BiznessDetails biznesses={biznesses}/>
                        </Route>
                    </Switch>
                    <Footer />
                </div>
            </MuiThemeProvider>
        </Router>
    )
}

export default App

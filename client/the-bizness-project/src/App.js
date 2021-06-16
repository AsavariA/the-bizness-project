import React, {useEffect} from 'react'
import NavBar from './Components/NavBar/NavBar';
import Form from './Components/Form/Form';
import Biznesses from './Components/Biznesses/Biznesses'
import {useDispatch} from 'react-redux';
import {getBiznesses} from './actions/biznessesAction'
import './App.css';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBiznesses());
    },[dispatch])

    return (
        <div>
            <NavBar />
            <div style={{display:'flex', justifyContent: 'space-evenly'}}>
                <Biznesses />
                <Form />
            </div>
        </div>
    )
}

export default App

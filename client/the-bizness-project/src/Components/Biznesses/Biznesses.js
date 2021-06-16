import React from 'react';
import Bizness from './Bizness/Bizness';
import {useSelector} from 'react-redux';

const Biznesses = () => {
    const biznesses = useSelector((state)=>state.biznessesReducers);
    console.log(biznesses);

    return (
        <div className='buzinesses'>
            <h1>Biznesses</h1>
            <Bizness />
            <Bizness />
            <Bizness />
        </div>
    )
}

export default Biznesses

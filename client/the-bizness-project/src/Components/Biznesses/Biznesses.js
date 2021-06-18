import React from 'react';
import Bizness from './Bizness/Bizness';
import { useSelector } from 'react-redux';
import { LinearProgress, Typography } from '@material-ui/core';
// import useStyles from './styles';

const Biznesses = () => {
    const biznesses = useSelector((state) => state.biznessesReducers);
    // const classes = useStyles();

    return (
        <div className='buzinesses' style={{padding: '1rem 2rem'}}>
            <div style={{textAlign: 'center', margin: '1rem 0'}}>
                <Typography variant='h4'>Biznesses</Typography>
            </div>
            {!biznesses.length ? <LinearProgress /> : (
                <div>
                    {
                        biznesses.map((bizness) => (
                            <Bizness bizness={bizness} />
                        ))
                    }
                </div>
            )}
        </div>
    )
}

export default Biznesses

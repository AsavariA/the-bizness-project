import React from 'react';
import Bizness from './Bizness/Bizness';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import Loader from "react-loader-spinner";
// import useStyles from './styles';

const Biznesses = () => {
    const biznesses = useSelector((state) => state.biznessesReducers);
    // const classes = useStyles();

    return (
        <div className='buzinesses' style={{ padding: '1rem 2rem' }}>
            <div style={{ textAlign: 'center', margin: '1rem 0' }}>
                <Typography variant='h4'>Biznesses</Typography>
            </div>
            {!biznesses.length ?
                <div style={{height:'100%', width:'100%', display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                    <Loader
                        type="ThreeDots"
                        color="#07134B"
                        height={100}
                        width={100}
                    />
                </div> 
                : (
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 2fr))', gridGap: '2rem'}}>
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

import React from 'react';
import Bizness from './Bizness/Bizness';
import { Typography } from '@material-ui/core';
import Loader from "react-loader-spinner";

const Biznesses = ({setcurrentId, setFormActive, biznesses}) => {

    return (
        <div className='buzinesses' style={{ padding: '1rem 2rem', marginBottom: '2rem' }}>
            <div style={{ textAlign: 'center', margin: '1rem 0' }}>
                <Typography variant='h4'>Biznesses</Typography>
            </div>
            {!biznesses.length ?
                <div style={{height:'80vh', width:'100%', display: 'flex', alignItems: 'center', justifyContent:'center'}}>
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
                                <div key={bizness._id}>
                                    <Bizness bizness={bizness} setcurrentId = {setcurrentId} setFormActive={setFormActive}/>
                                </div>
                            ))
                        }
                    </div>
                )}
        </div>
    )
}

export default Biznesses

import React from 'react'
import Bizness from '../Biznesses/Bizness/Bizness';
import Loader from "react-loader-spinner";

const Profile = ({ biznesses, setcurrentId, setFormActive }) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const result = biznesses.filter(bizness => bizness.ownerName === user?.result?.name);

    const topStyles = {
        background: 'white',
        bottom: '0',
        width: '100%',
        textAlign: 'center',
        padding: '4rem 0.5rem'
    }

    return (
        <div>
            <div style={topStyles}>
                <h1>{user.result.name.toUpperCase()} Businesses</h1>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 2fr))', gridGap: '2rem', padding: '4rem 2rem' }}>
                {result.length > 0 ? result.map((bizness) => (
                    <div key={bizness._id}>
                        <Bizness bizness={bizness} setcurrentId={setcurrentId} setFormActive={setFormActive} />
                    </div>
                )) : <div style={{ height: '60vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <Loader
                        type="ThreeDots"
                        color="#07134B"
                        height={100}
                        width={100}
                    />
                    <h2>Loading you businesses. Please go back if dont own a business.</h2>
                </div>}
            </div>
        </div>

    )
}

export default Profile

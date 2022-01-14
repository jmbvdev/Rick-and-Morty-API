import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({resident}) => {

    useEffect(()=>{
        axios.get(resident)
        .then(res=>setResidents(res.data))

    },[])

    const [residents, setResidents]=useState("")


    return (
        <div className='resident'>
            <img src={residents?.image} alt="" />

            <div className='resident-info'>
                
                <h3>{residents?.name}</h3>
                <p><b>Estatus: </b>{residents?.status} - {residents?.species}</p>
                <p><b>Origin: </b>{residents?.origin?.name}</p>
                <p><b>Number of episodes: </b>{residents?.episode?.length}</p>
            </div>
        </div>
    );
};

export default ResidentInfo;
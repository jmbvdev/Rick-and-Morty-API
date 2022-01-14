import React from 'react';
import ResidentInfo from './ResindetInfo';

const LocationInfo = ({location}) => {
    
    
    return (
        <div className="location-info">
               <h1>{location.name}</h1> 
            <div className='location-title'>

               <p><b>type: </b>{location.type}</p>
               <p><b>Dimension: </b>{location.dimension}</p>
               <p><b>Population: </b>{location.residents?.length}</p>
            </div>
           
               <div className='container'>
               {
                   location.residents?.map(resident=><ResidentInfo resident={resident} key={resident}/>)
               }
               </div>
        </div>
    );
};

export default LocationInfo;
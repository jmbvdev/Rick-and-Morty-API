import React from 'react';
import ResidentList from './ResindetList';

const LocationInfo = ({character}) => {
    
    
    return (
        <div className="location-info">
               <h1>{character.name}</h1> 
            <div className='location-title'>

               <p><b>type: </b>{character.type}</p>
               <p><b>Dimension: </b>{character.dimension}</p>
               <p><b>Population: </b>{character.residents?.length}</p>
            </div>
           
               <div className='container'>
               {
                   character.residents?.map(resident=><ResidentList resident={resident} key={resident}/>)
               }
               </div>
        </div>
    );
};

export default LocationInfo;
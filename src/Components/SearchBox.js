import axios from 'axios';
import React, { useState } from 'react';

const SearchBox = ({setCharacter}) => {
  
    const [id, setId]= useState("")
    const search= ()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
  .then(res=>setCharacter(res.data))
    }

    return (
        <div>
            <input type="text" placeholder='type a location id' onChange={e=>setId(e.target.value)} value={id} />
            <button onClick={search}>Search</button>
        </div>
    );
};

export default SearchBox;
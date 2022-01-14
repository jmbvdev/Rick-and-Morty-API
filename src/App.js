
import axios from 'axios'
import { useEffect, useState } from 'react';
import './App.css';
import LocationInfo from './Components/LocationInfo';
import SearchBox from './Components/SearchBox';

function App() {

  const [location, setLocation]=useState({})
  
  
  useEffect(()=>{
  const randomId= Math.floor(Math.random()*126)+1
  axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
  .then(res=>setLocation(res.data))
},[])



  return (
    <div>
      <header className='header'>
        <img src="http://i.cdn.turner.com/adultswim/big/img/2015/07/17/Rick%26MortyS02_Header_REF.png" alt="" />

      </header>
    <div className="search">
      <SearchBox setCharacter={setLocation}/>
    </div>
      <LocationInfo location={location} key={location.url}/>
    </div>
  );
}

export default App;

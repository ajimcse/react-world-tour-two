
import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    console.log(country)
    const {name, flag,iso3} = country;
  const [visited, setVisited] = useState(false)

    const handleClick = () =>{
         setVisited(!visited)
    }
    return (
        <div className='country-container'>
            <h3>Name:{name}</h3>
         <img className='country' src={`https://flagdex.net${flag}`} alt={name} />
        <p>Code:{iso3}</p>
        <button onClick={handleClick}>Visited</button>
          {
         visited ? ' I have a visited' : 'not Visited'
          }
        </div>
    );
}; 

export default Country;
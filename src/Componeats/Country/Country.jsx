
import { useState } from 'react';
import './Country.css'
const Country = ({ country , handleVisitedCountry }) => {
  // console.log(country)
  const { name, flag, iso3 } = country;
  const [visited, setVisited] = useState(false)

  const handleClick = () => {
    setVisited(!visited)
  }
 
  return (
    
    <div className={`country-container ${visited ? 'visited' : ''}`}>
      <h3 style={{ color: visited ? 'purple' : 'red' }}>Name: {name}</h3>
      <img className='country' src={`https://flagdex.net${flag}`} alt={name} />
      <p>Code: {iso3}</p>
      <button onClick={handleClick}> Visited</button>
     
     <button className='country-button' onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
      {
        visited ? ' I have visited' : 'Not Visited'
      }
    </div>
  );
};

export default Country;
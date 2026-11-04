import { useState } from "react";
import { useEffect } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountary] = useState([]);

    const handleVisitedCountry = country => {
        console.log(country);
        const newVisitedCountries = [...visitedCountry, country];
        setVisitedCountary(newVisitedCountries);
    }

    useEffect(() => {
        fetch("https://flagdex.net/api/v1/countries-lite.json")
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h2>Countries:{countries.length}</h2>
            <h1>Visited Countries:{visitedCountry.length}</h1>
                
            <div className="mark-visited-country">
                {
                    visitedCountry.map(country =>
                        <div className="mark-country" key={country.iso2}>
                        <h2>{country.name}</h2>
                       <img src={`https://flagdex.net${country.flag}`} alt={country.name} />
                        </div>
                    )
                }
            </div>
            <div>
                <div className="countries-container">

                    {
                        countries.map(country => <Country key={country.iso2} country={country}
                            handleVisitedCountry={handleVisitedCountry}
                        ></Country>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Countries;
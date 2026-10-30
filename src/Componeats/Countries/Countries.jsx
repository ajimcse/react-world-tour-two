import { useState } from "react";
import { useEffect } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("https://flagdex.net/api/v1/countries-lite.json")
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => console.log(error));
    }, []);


    return (
        <div>
            <h2>Countries:{countries.length}</h2>
            <div>
                <div className="countries-container">

                    {
                        countries.map(country => <Country key={country.iso2} country={country}></Country>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Countries;
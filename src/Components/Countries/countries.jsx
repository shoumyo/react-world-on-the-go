import React, { use, useState } from 'react';
import Country from './country';
import'./countries.css'

const Countries = ({CountriesPromise}) => {
    const [traveled,setTraveled]=useState([]);
    const countriesData=use(CountriesPromise);
    const countries=countriesData.countries;

    const handleTraveled=()=>{
        const count=traveled+1;
        setTraveled(count);
    }
    
    return (
        <div>
            <h4>In the countries:{countries.length}</h4>
            <h3>Visited:{traveled}</h3>
            <div className='countries'>
                {
                    countries.map(country=><Country key={country.cca3.cca3} country={country} handleTraveled={handleTraveled}></Country>)
                }
            </div>
        </div>

    );
};

export default Countries;
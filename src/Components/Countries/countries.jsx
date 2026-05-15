import React, { use, useState } from 'react';
import Country from './country';
import'./countries.css'

const Countries = ({CountriesPromise}) => {
    const [traveled,setTraveled]=useState([]);
    const [visitedFlags,setVisitedFlags]=useState([])
    const countriesData=use(CountriesPromise);
    const countries=countriesData.countries;

    const handleTraveled=(country)=>{
        const newTraveledCountries=[...traveled,country];
        setTraveled(newTraveledCountries);
    }

    const handleVisitedFlages=(flag)=>{
        const newVisitedFlags=[...visitedFlags,flag];
        setVisitedFlags(newVisitedFlags);
    }
    
    return (
        <div>
            <h4>In the countries:{countries.length}</h4>
            <h3>Visited:{traveled.length}</h3>
            <h3>Total Flags Visited:{visitedFlags.length}</h3>
            <ol>
                {
                    traveled.map(country=> <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='visited-flags-cointainer'>
                {
                    visitedFlags.map((flag,index)=><img 
                        key={index}
                        src={flag}></img>)
                }
            </div>
            <div className='countries'>
                {
                    countries.map(country=><Country key={country.cca3.cca3}
                         country={country}
                         handleTraveled={handleTraveled} 
                         handleVisitedFlages={handleVisitedFlages}></Country>)
                }
            </div>
        </div>

    );
};

export default Countries;
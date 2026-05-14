import React, { use } from 'react';
import Country from './country';
import'./countries.css'

const Countries = ({CountriesPromise}) => {

    const countriesData=use(CountriesPromise);
    const countries=countriesData.countries;
    
    return (
        <div>
            <h4>In the countries:{countries.length}</h4>
            <div className='countries'>
                {
                    countries.map(country=><Country key={country.cca3.cca3} country={country}></Country>)
                }
            </div>
        </div>

    );
};

export default Countries;
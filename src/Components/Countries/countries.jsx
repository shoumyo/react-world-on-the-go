import React, { use } from 'react';
import Country from './country';

const Countries = ({CountriesPromise}) => {

    const countriesData=use(CountriesPromise);
    const countries=countriesData.countries;
    
    return (
        <div>
            <h4>In the countries:{countries.length}</h4>
            {
                countries.map(country=><Country key={country.cca3.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;
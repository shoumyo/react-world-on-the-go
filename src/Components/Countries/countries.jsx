import React, { use } from 'react';

const Countries = ({CountriesPromise}) => {

    const countriesData=use(CountriesPromise);
    const countries=countriesData.countries;
    
    return (
        <div>
            <h4>In the countries:{countries.length}</h4>
        </div>
    );
};

export default Countries;
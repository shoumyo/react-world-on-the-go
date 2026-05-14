import React from 'react';

const country = ({country}) => {
    return (
        <div>
            <h3>Name:{country.name.common}</h3>
            <h4>Population:{country.population.population}</h4>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}></img>
        </div>
    );
};

export default country;
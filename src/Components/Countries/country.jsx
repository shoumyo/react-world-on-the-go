import React from 'react';
import './coountry.css';

const country = ({country}) => {

    const handleVisited=()=>{
        alert('visited');
    }

    return (
        <div className='country'>
            <h3>Name:{country.name.common}</h3>
            <h4>Population:{country.population.population}</h4>
            <p>Area:{country.area.area}</p>
            <p>{country.area.area>300000?"Big Country":"Small country"}</p>
            <button onClick={handleVisited}>Not Visited</button>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}></img>
        </div>
    );
};

export default country;
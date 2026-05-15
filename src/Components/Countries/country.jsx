import React, { useState } from 'react';
import './coountry.css';

const country = ({country,handleTraveled,handleVisitedFlages}) => {

    const [visited,setVisited]=useState(false);

    const handleVisited=()=>{
        handleTraveled(country);
    //     if(visited){
    //         setVisited(false);
    //     }
    //     else{
    //         setVisited(true);
    //     }
    setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name:{country.name.common}</h3>
            <h4>Population:{country.population.population}</h4>
            <p>Area:{country.area.area}</p>
            <p>{country.area.area>300000?"Big Country":"Small country"}</p>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}></img>
             <button onClick={handleVisited}>{visited?"Visited":"Not Visited"}</button>
             <button onClick={()=>{handleVisitedFlages(country.flags.flags.png)}}>Add Visited Flag</button>
        </div>
    );
};

export default country;
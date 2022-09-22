import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, population, area, region,flags,capital} = props.country;
    return (
        <div className='country bg-success text-white'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;
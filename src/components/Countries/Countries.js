import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries,setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    const countriesSort = Object.values(countries).sort(function(a,b){
        return b.population - a.population;
    });
    return (
        <div>
            <h2>Country Number: {countries.length}</h2>
            <div className='countries-container'>
                {
                countriesSort.map(country => <Country country={country} key={country.cca3}></Country> )
                }
            </div>
            
        </div>
    );
};

export default Countries;
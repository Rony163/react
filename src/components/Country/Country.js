import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, capital, population, flag, region } = props.country;
    return (
        <div className="country bg-success">
            <h4>Name: {name}</h4>
            <img src={flag} alt="" />
            <p><small>Region: {region}</small></p>
            <p>Capital: {capital} Population: {population}</p>
        </div>
    );
};

export default Country;
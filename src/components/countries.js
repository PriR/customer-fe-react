import React from 'react'
import Country from './country';

const Countries = ({ countries, title, onChange }) => {
    return (
        <div>
            <center><h1>{title}</h1></center>
            <select onChange={onChange}>
                <option id="0">Select</option>
                {countries.map((country) => (
                    <Country country={country} />
                ))}
            </select>
        </div>
    )
};

export default Countries
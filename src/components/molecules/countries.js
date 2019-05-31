import React from 'react'
import Country from '../atoms/country';
import { ALL_COUNTRIES } from '../utils/labels';

const Countries = ({ countries, title, onChange }) => {
    return (
        <div>
            <center><h1>{title}</h1></center>
            <select onChange={onChange}>
                <option id="">{ALL_COUNTRIES}</option>
                {countries.map((country) => (
                    <Country country={country} />
                ))}
            </select>
        </div>
    )
};

export default Countries
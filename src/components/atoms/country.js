import React from 'react'

const Country = ({ country }) => {
    return (
        <option id={country.code}>{country.name}</option>
    )
};

export default Country
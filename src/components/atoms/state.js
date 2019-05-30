import React from 'react'

const State = ({ state }) => {
    return (
        <option id={state.id}>{state.name}</option>
    )
};

export default State
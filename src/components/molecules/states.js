import React from 'react'
import State from '../atoms/state';

const States = ({ states, title, onChange }) => {
    return (
        <div>
            <center><h1>{title}</h1></center>
            <select onChange={onChange}>
                <option id="">All States</option>
                {states.map((state) => (
                    <State state={state} />
                ))}
            </select>
        </div>
    )
};

export default States
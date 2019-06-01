import React from 'react'
import State from '../atoms/state';
import { ALL_STATES } from '../utils/labels';

const States = ({ states, title, onChange }) => {
    return (
        <div>
            <select onChange={onChange} >
                <option id="">{ALL_STATES}</option>
                {states.map((state) => (
                    <State key={state.id} state={state} />
                ))}
            </select>
        </div>
    )
};

export default States
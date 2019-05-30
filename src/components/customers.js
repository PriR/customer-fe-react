import React from 'react'
import Customer from './customer';

const Customers = ({customers, title}) => {
    return (
        <div>
            <center><h1>{title}</h1></center>
            {customers.map((customer) => (
                <Customer customer={customer} />
            ))}
        </div>
    )
};

export default Customers
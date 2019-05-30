import React from 'react'

const Customer = ({ customer }) => {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{customer.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{customer.phone}</h6>
                <p class="card-text">{customer.country.name}</p>
            </div>
        </div>
    )
};

export default Customer
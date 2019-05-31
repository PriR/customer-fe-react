import React from 'react'

const Customer = ({ customer }) => {
    return (
        <div class="table table-bordered table-hover">
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted">{customer.country.name}</h6>
                <h6 class="card-subtitle mb-2 text-muted">{customer.state}</h6>
                <h6 class="card-subtitle mb-2 text-muted">{customer.country.code}</h6>
                <h6 class="card-subtitle mb-2 text-muted">{customer.phone}</h6>
                <h5 class="card-title">{customer.name}</h5>
            </div>
        </div>
    )
};

export default Customer
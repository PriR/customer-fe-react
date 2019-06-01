import React from 'react';
import { SELECT_COUNTRY, SELECT_STATE } from './labels';

const STATES = [
    {
        id: 1,
        name: "Valids"
    },
    {
        id: 0,
        name: "Invalids"
    }
];

const HEADER_CUSTOMER_FINDERS_LIST = [
    { value: SELECT_COUNTRY },
    { value: SELECT_STATE }
];

const COLUMNS_CUSTOMER_LIST = [{
    Header: 'Name',
    accessor: 'name'
}, {
    Header: 'Phone',
    accessor: 'phone'
},
{
    Header: 'Valid',
    accessor: 'state',
    Cell: props => <span className='number'>{(props.value === "1") ? "Yes" : "No"}</span>
}, {
    id: 'countryName',
    Header: 'Country Name',
    accessor: d => d.country.name
}, {
    Header: <span>Country Code</span>,
    accessor: 'country.code'
}];

const PATH = "http://localhost:8000";

const COUNTRIES = "/countries";

const CUSTOMERS = "/customers";

const SEARCH = "/search?"

export { STATES, PATH, COUNTRIES, CUSTOMERS, SEARCH, COLUMNS_CUSTOMER_LIST, HEADER_CUSTOMER_FINDERS_LIST }
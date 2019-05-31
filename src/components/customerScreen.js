import React, { Component } from 'react';


import Customers from './molecules/customers';
import Countries from './molecules/countries';
import States from './molecules/states';
import { STATES } from './utils/constants';
import { SELECT_COUNTRY, SELECT_STATE, CUSTOMER_LIST, FIND_CUSTOMERS } from './utils/labels';
import { getComponentId } from './utils/functions';
import { getCustomerList, getCountryList, getCustomerByFilter } from './service/customerService'

class CustomerScreen extends Component {

    constructor() {
        super();
        this.state = {
            customers: [],
            countries: [],
            allStates: STATES,
            selectedCountry: {},
            selectedState: {}
        };
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.customers = this.customers.bind(this);
        this.countries = this.countries.bind(this);
        this.filterCustomer = this.filterCustomer.bind(this);
    }

    componentDidMount() {
        this.customers();
        this.countries();
    }

    customers() {
        getCustomerList().then((data) => this.setState({ customers: data }))
    }

    countries() {
        getCountryList().then((data) => this.setState({ countries: data }))
    }

    filterCustomer() {
        const data = { country: this.state.selectedCountry, state: this.state.selectedState }
        getCustomerByFilter(data).then((customers) => this.setState({ customers }))
    }

    onChangeCountry(event) {
        this.setState({ selectedCountry: getComponentId(event) });
    }

    onChangeState(event) {
        this.setState({ selectedState: getComponentId(event) });
    }

    render() {
        return (
            <div>
                <Countries
                    title={SELECT_COUNTRY}
                    countries={this.state.countries}
                    onChange={this.onChangeCountry}
                />
                <States
                    title={SELECT_STATE}
                    states={this.state.allStates}
                    onChange={this.onChangeState}
                />
                <button className="button is-info" onClick={this.filterCustomer}>
                    {FIND_CUSTOMERS} </button>
                <Customers customers={this.state.customers} title={CUSTOMER_LIST} />
            </div>
        )
    }
}

export default CustomerScreen;

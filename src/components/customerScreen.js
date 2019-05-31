import React, { Component } from 'react';
import _ from 'lodash';

import Customers from './molecules/customers';
import Countries from './molecules/countries';
import States from './molecules/states';
import { STATES, PATH, COUNTRIES, CUSTOMERS, SEARCH } from './utils/constants';
import { SELECT_COUNTRY, SELECT_STATE, CUSTOMER_LIST, FIND_CUSTOMERS } from './utils/labels';
// import { getCustomerList } from './customerService'

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
        this.getCustomerByFilter = this.getCustomerByFilter.bind(this);
    }

    componentDidMount() {
        this.getCustomerList();
        this.getCountriesList();
    }

    getCountriesList() {
        fetch(PATH + COUNTRIES)
            .then(res => res.json())
            .then((data) => this.setState({ countries: data }))
            .catch(console.log)
    }

    getCustomerList() {
        fetch(PATH + CUSTOMERS)
            .then(res => res.json())
            .then((data) => this.setState({ customers: data }))
            .catch(console.log)
    }

    encodeData(data) {
        return Object.keys(data).map(function (key) {
            if (!_.isEmpty(data[key])) {
                return [key, data[key]].map(encodeURIComponent).join("=");
            }
        }).join("&");
    }

    findCustomers() {
        let url = PATH;
        const data = { country: this.state.selectedCountry, state: this.state.selectedState }
        const params = this.encodeData(data);
        if (params !== "&") {
            url = url + CUSTOMERS + SEARCH + params;
        }
        return url;
    }

    getCustomerByFilter() {
        const url = this.findCustomers();
        fetch(url)
            .then(res => res.json())
            .then((data) => this.setState({ customers: data }))
            .catch(console.log())
    }

    onChangeCountry(event) {
        const index = event.target.selectedIndex;
        var optionElement = event.target.childNodes[index];
        const id = optionElement.getAttribute('id');
        this.setState({ selectedCountry: id });
    }

    onChangeState(event) {
        const index = event.target.selectedIndex;
        var optionElement = event.target.childNodes[index];
        const id = optionElement.getAttribute('id');
        this.setState({ selectedState: id });
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
                <button className="button is-info" onClick={this.getCustomerByFilter}>
                    {FIND_CUSTOMERS} </button>
                <Customers customers={this.state.customers} title={CUSTOMER_LIST} />
            </div>
        )
    }
}

export default CustomerScreen;

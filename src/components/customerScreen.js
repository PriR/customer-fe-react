import React, { Component } from 'react';
import Customers from './customers';
import Countries from './countries';
// import { getCustomerList } from './customerService'

class CustomerScreen extends Component {

    constructor() {
        super();
        this.state = {
            customers: [],
            countries: [],
            selectedCountry: {},
            isValid: {}
        };
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.getCustomerList();
        this.getCountriesList();
    }

    getCountriesList() {
        fetch('http://demo2034740.mockable.io/countries')
            .then(res => res.json())
            .then((data) => this.setState({ countries: data }))
            .catch(console.log)
    }

    getCustomerList() {
        fetch('http://demo2034740.mockable.io/customers')
            .then(res => res.json())
            .then((data) => this.setState({ customers: data }))
            .catch(console.log)
    }

    getCustomerByFilter() {
        fetch('http://demo2034740.mockable.io/customers')
            .then(res => res.json())
            .then((data) => this.setState({ customers: data }))
            .catch(console.log)
    }

    onChange(event) {
        const index = event.target.selectedIndex;
        var optionElement = event.target.childNodes[index];
        var id = optionElement.getAttribute('id');
        this.setState({ selectedCountry: id });
    }

    render() {
        return (
            <div>
                <Countries
                    title={"Select country"}
                    countries={this.state.countries}
                    onChange={this.onChange}
                />
                <Customers customers={this.state.customers} title={"Customers List"} />

            </div>
        )
    }
}

export default CustomerScreen;

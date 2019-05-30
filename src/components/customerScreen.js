import React, { Component } from 'react';
import Customers from './molecules/customers';
import Countries from './molecules/countries';
import States from './molecules/states';
// import { getCustomerList } from './customerService'

class CustomerScreen extends Component {

    constructor() {
        super();
        this.state = {
            customers: [],
            countries: [],
            allStates: [
                {
                    id: 0,
                    name: "Valid"
                },
                {
                    id: 1,
                    name: "Invalid"
                }],
            selectedCountry: {},
            selectedState: {},
        };
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
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

    getURIFilters() {
        let url = 'http://demo2034740.mockable.io/customers/search?';
        if (this.state.selectedCountry) {
            url = url + "country=" + this.state.selectedCountry;
        }
        // 0 = valid, 1 = invalido, vazio = todos
        if (this.state.states) {
            url = (this.state.selectedCountry) ? url + "&state=" + this.state.states : url + "state=" + this.state.states;
        }
        console.log("url: ", url);
        return url;
    }

    getCustomerByFilter() {
        const url = this.getURIFilters();
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
        this.setState({ states: id });
    }

    render() {
        return (
            <div>
                <Countries
                    title={"Select country"}
                    countries={this.state.countries}
                    onChange={this.onChangeCountry}
                />
                <States
                    title={"Select State"}
                    states={this.state.allStates}
                    onChange={this.onChangeState}
                />
                <Customers customers={this.state.customers} title={"Customers List"} />
            </div>
        )
    }
}

export default CustomerScreen;

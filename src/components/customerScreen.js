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
            selectedState: { id: 265 }
        };
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
    }

    componentDidMount() {
        this.getCustomerList();
        this.getCountriesList();
        // this.findCustomers()
    }

    getCountriesList() {
        fetch('http://localhost:8000/countries')
            .then(res => res.json())
            .then((data) => this.setState({ countries: data }))
            .catch(console.log)
    }

    getCustomerList() {
        fetch('http://localhost:8000/customers')
            .then(res => res.json())
            .then((data) => this.setState({ customers: data }))
            .catch(console.log)
    }

    encodeData(data) {
        return Object.keys(data).map(function (key) {
            return [key, data[key]].map(encodeURIComponent).join("=");
        }).join("&");
    }

    //on click botao
    findCustomers() {
        let url = 'http://localhost:8000/customers';
        // let filtersCountry = '';
        // let filtersState = '';
        // if (this.state.selectedCountry) {
        //     filterCountry = "country=" + this.state.selectedCountry;
        // }
        // // 0 = valid, 1 = invalido, vazio = todos
        // if (this.state.states) {
        //     filtersState = "state=" + this.state.states;
        // }
        // console.log("url: ", url);

        // if (filters) {
        //     url = '/search?' + filters;
        // }
        const data = { country: this.state.selectedCountry, state: this.state.selectedState }
        url = url + this.encodeDataToURL(data);
        console.log('url: ', url);
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
                <div>
                    <h2 align="center">San Andreas: Multiplayer</h2>
                    <div align="center" style="{{float:left;width:300px;}}">CONTENT OF COLUMN ONE GOES HERE</div>
                    <div align="center" class="float-left">CONTENT OF COLUMN TWO GOES HERE</div>
                    <div align="center" class="float-left">CONTENT OF COLUMN THREE GOES HERE</div>
                </div>
                {/* <Countries
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
                <button className="button is-info" onClick={this.addItem}>
                    Find Customers </button> */}
            </div>
        )
    }
}

export default CustomerScreen;

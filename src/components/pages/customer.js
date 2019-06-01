import React, { Component } from 'react';
import Countries from '../molecules/countries';
import TableWithFinder from '../organisms/tableWithFinder';
import States from '../molecules/states'
import { STATES, COLUMNS_CUSTOMER_LIST, HEADER_CUSTOMER_FINDERS_LIST } from '../../utils/constants';
import { FIND } from '../../utils/labels';
import { getComponentId } from '../../utils/functions';
import { getCustomerList, getCountryList, getCustomerByFilter } from '../../service/customer'

class Customer extends Component {

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
        const headerFindersValue = [{
            value: <Countries
                countries={this.state.countries}
                onChange={this.onChangeCountry}

            />
        }, {
            value:<States
                states={this.state.allStates}
                onChange={this.onChangeState}
            />
        }]

        const btnFind = <button onClick={this.filterCustomer}>{FIND} </button>;

        return (
            <div>
                <TableWithFinder
                    headerFindersDesc={HEADER_CUSTOMER_FINDERS_LIST}
                    headerFindersValue={headerFindersValue}
                    btnFind={btnFind}
                    data={this.state.customers}
                    columns={COLUMNS_CUSTOMER_LIST} />
            </div>
        );
    }
}

export default Customer;

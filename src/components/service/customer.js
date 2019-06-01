import { PATH, COUNTRIES, CUSTOMERS } from '../utils/constants';
import { buildFindURL } from '../utils/functions';

const getCustomerList = () => new Promise((resolve) => {
    fetch(PATH + CUSTOMERS)
        .then(res => res.json())
        .then((data) => resolve(data))
        .catch((err) => console.log("ERR getCustomerList: ", err))
});

const getCountryList = () => new Promise((resolve) => {
    fetch(PATH + COUNTRIES)
        .then(res => res.json())
        .then((data) => resolve(data))
        .catch((err) => console.log("ERR getCustomerList: ", err))
});

const getCustomerByFilter = (data)  => new Promise((resolve) => {
    const url = buildFindURL(data);
    fetch(url)
        .then(res => res.json())
        .then((data) => resolve(data))
        .catch((err) => console.log("ERR getCustomerByFilter: ", err))
})

export { getCustomerList, getCountryList, getCustomerByFilter }
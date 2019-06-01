import _ from 'lodash';
import { PATH, CUSTOMERS, SEARCH } from './constants';

const encodeData = (data) => {
    // eslint-disable-next-line 
    return Object.keys(data).map(function (key) {
        if (!_.isEmpty(data[key])) {
            return [key, data[key]].map(encodeURIComponent).join("=");
        }
    }).join("&");
}

const getComponentId = (event) => {
    const index = event.target.selectedIndex;
    var optionElement = event.target.childNodes[index];
    return optionElement.getAttribute('id');
}

const buildFindURL = (data) => {
    let url = PATH + CUSTOMERS;
    const params = encodeData(data);
    if (params !== "&") {
        return url + SEARCH + params;
    }
    return url;
}

export { getComponentId, buildFindURL };
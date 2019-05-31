import _ from 'lodash';
import { PATH, CUSTOMERS, SEARCH } from './constants';

const encodeData = (data) => {
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
    let url = PATH;
    
    const params = encodeData(data); // aq
    if (params !== "&") {
        url = url + CUSTOMERS + SEARCH + params;
    }
    return url;
}

export { getComponentId, buildFindURL };
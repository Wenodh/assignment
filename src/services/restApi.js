import axios from 'axios';

import {
    ADD_RESOURCE_ITEM,
    RESOURCES_API,
    RESOURCE_DETAILS_API,
    UPDATE_RESOURCE_DETAILS,
} from './../utilities/constants';

// to get all resources list
export const GetResources = () => {
    const url = RESOURCES_API;
    return axios.get(url);
};

//to get particular resource item by id
export const GetResourcesDetailsById = (resource_id) => {
    const url = `${RESOURCE_DETAILS_API}${resource_id}.json`;
    return axios.get(url);
};

//updating resource
export const updateResourceItem = () => {
    const url = UPDATE_RESOURCE_DETAILS;
    return axios.get(url);
};

//adding new resource item
export const AddResourceItem = () => {
    const url = ADD_RESOURCE_ITEM;
    return axios.get(url);
};

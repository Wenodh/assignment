import axios from 'axios';

import {
    ADD_RESOURCE_ITEM,
    RESOURCES_API,
    RESOURCE_DETAILS_API,
    UPDATE_RESOURCE_DETAILS,
} from './../utilities/constants';

export const GetResources = () => {
    const url = RESOURCES_API;
    return axios.get(url);
};

export const GetResourcesDetailsById = (resource_id) => {
    const url = `${RESOURCE_DETAILS_API}${resource_id}.json`;
    return axios.get(url);
};

export const updateResourceItem = () => {
    const url = UPDATE_RESOURCE_DETAILS;
    return axios.get(url);
};
export const AddResourceItem = () => {
    const url = ADD_RESOURCE_ITEM;
    return axios.get(url);
};

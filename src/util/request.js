import axios from 'axios'
import { SWAPI_URL } from './constants'

// Default error messages for failing requests.
const errorMessages = {
    default: 'Something went wrong',
    noResponse: 'No response from the server',
    network: 'Network error'
}

// This function handles three types of 
// errors relationed to requests.
function errorHandler (error) {
    if (error.response) {
        /**
         * The server responded with a status code
         * that falls out of the range of 2xx.
         */
        throw error.response.data || errorMessages.default
    } else if (error.request) {
        /**
         * The request was made but no response was received.
         */
        throw error.request.response || errorMessages.noResponse
    } else {
        /**
         * Something went wrong in setting up the request.
         */
        throw error.message || errorMessages.network
    }
}

const swapi = axios.create({
    baseURL: SWAPI_URL
})

export async function swapiFetch ({ url, method, data, params }) {
    try {
        const response = await swapi({ url, method, data, params })
        return response.data
    } catch (error) {
        errorHandler(error)
    }
}

export async function fetch ({
    url,
    method,
    headers,
    data,
    params
}) {
    try {
        const response = await axios({
            url,
            headers,
            method,
            data,
            params
        });
        return response.data;
    } catch (error) {
        errorHandler(error);
    }
}
```javascript
// thirdPartyIntegration.js

// Importing required modules
const axios = require('axios');
const errorHandling = require('./errorHandling');

// Function to make GET requests
const get = async (url, params = {}) => {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    errorHandling.logError(`GET request to ${url} failed: ${error}`);
    throw error;
  }
}

// Function to make POST requests
const post = async (url, data = {}) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    errorHandling.logError(`POST request to ${url} failed: ${error}`);
    throw error;
  }
}

// Function to make PUT requests
const put = async (url, data = {}) => {
  try {
    const response = await axios.put(url, data);
    return response.data;
  } catch (error) {
    errorHandling.logError(`PUT request to ${url} failed: ${error}`);
    throw error;
  }
}

// Function to make DELETE requests
const del = async (url) => {
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    errorHandling.logError(`DELETE request to ${url} failed: ${error}`);
    throw error;
  }
}

// Exporting the third party integration tools
module.exports = {
  get,
  post,
  put,
  del
};
```

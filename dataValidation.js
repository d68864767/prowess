```javascript
// dataValidation.js

// Importing required modules
const _ = require('lodash');

// Function to validate data type
function validateDataType(data, type) {
  return typeof data === type;
}

// Function to validate if data is an array
function validateArray(data) {
  return Array.isArray(data);
}

// Function to validate if data is an object
function validateObject(data) {
  return _.isObject(data);
}

// Function to validate if data is a string
function validateString(data) {
  return _.isString(data);
}

// Function to validate if data is a number
function validateNumber(data) {
  return _.isNumber(data);
}

// Function to validate if data is boolean
function validateBoolean(data) {
  return _.isBoolean(data);
}

// Function to validate if data is null
function validateNull(data) {
  return _.isNull(data);
}

// Function to validate if data is undefined
function validateUndefined(data) {
  return _.isUndefined(data);
}

// Exporting all the functions
module.exports = {
  validateDataType,
  validateArray,
  validateObject,
  validateString,
  validateNumber,
  validateBoolean,
  validateNull,
  validateUndefined
};
```


```javascript
// errorHandling.js

// Importing required modules
const util = require('util');

// Function to log error messages
const logError = (error) => {
  console.error(util.format('[ERROR] %s', error));
}

// Function to log info messages
const logInfo = (message) => {
  console.log(util.format('[INFO] %s', message));
}

// Function to handle exceptions
const handleException = (error) => {
  logError(error);
  process.exit(1);
}

// Function to handle rejections
const handleRejection = (reason) => {
  logError(`Unhandled Rejection at Promise: ${reason}`);
  process.exit(1);
}

// Catching uncaught exceptions
process.on('uncaughtException', handleException);

// Catching unhandled promise rejections
process.on('unhandledRejection', handleRejection);

// Exporting the error handling tools
module.exports = {
  logError,
  logInfo,
  handleException,
  handleRejection
};
```

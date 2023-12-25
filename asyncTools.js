```javascript
// asyncTools.js

// Importing required modules
const util = require('util');
const fs = require('fs');

// Promisify fs.readFile
const readFileAsync = util.promisify(fs.readFile);

// Promisify fs.writeFile
const writeFileAsync = util.promisify(fs.writeFile);

// Function to handle async/await with error handling without try-catch
const handleAsync = (promise) => {
  return promise
    .then(data => [null, data])
    .catch(err => [err]);
}

// Function to delay execution
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Exporting the async tools
module.exports = {
  readFileAsync,
  writeFileAsync,
  handleAsync,
  delay
};
```


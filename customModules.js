```javascript
// customModules.js

// Importing required modules
const fs = require('fs');
const path = require('path');

// Function to load a custom module
function loadModule(moduleName) {
  try {
    const modulePath = path.join(__dirname, moduleName);
    const module = require(modulePath);
    return module;
  } catch (err) {
    console.error(`Failed to load module: ${moduleName}`, err);
    return null;
  }
}

// Function to unload a custom module
function unloadModule(moduleName) {
  try {
    const modulePath = require.resolve(path.join(__dirname, moduleName));
    delete require.cache[modulePath];
    return true;
  } catch (err) {
    console.error(`Failed to unload module: ${moduleName}`, err);
    return false;
  }
}

// Function to reload a custom module
function reloadModule(moduleName) {
  if (unloadModule(moduleName)) {
    return loadModule(moduleName);
  } else {
    return null;
  }
}

// Exporting all the functions
module.exports = {
  loadModule,
  unloadModule,
  reloadModule
};
```

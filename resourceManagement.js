```javascript
// resourceManagement.js

// Importing required modules
const os = require('os');

// Function to get system memory usage
const getMemoryUsage = () => {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = totalMemory - freeMemory;
  const memoryUsage = {
    total: totalMemory,
    free: freeMemory,
    used: usedMemory,
    usagePercentage: (usedMemory / totalMemory) * 100
  };
  return memoryUsage;
}

// Function to get system CPU usage
const getCpuUsage = () => {
  const cpuInfo = os.cpus();
  return cpuInfo;
}

// Function to get system uptime
const getSystemUptime = () => {
  const uptime = os.uptime();
  return uptime;
}

// Function to get system information
const getSystemInfo = () => {
  const systemInfo = {
    platform: os.platform(),
    release: os.release(),
    hostname: os.hostname(),
    type: os.type(),
    arch: os.arch()
  };
  return systemInfo;
}

// Exporting the resource management tools
module.exports = {
  getMemoryUsage,
  getCpuUsage,
  getSystemUptime,
  getSystemInfo
};
```

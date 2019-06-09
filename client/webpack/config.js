const path = require('path');

module.exports.srcPath = path.resolve(__dirname, '../src');
module.exports.modulesPath = path.resolve(__dirname, '../node_modules');
module.exports.assetsPath = path.resolve(__dirname, '../src/assets');
module.exports.buildPath = path.join(__dirname, '../build');

require('babel-core/register');

var exportTable = require('./exporter/index.js').exportTable;

exportTable('users');
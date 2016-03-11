var path = require('path')

global.appRoot = path.resolve(__dirname)
require('babel-register')
var app = require('./server/server.js')

module.exports = app

var path = require('path')

global.appRoot = path.resolve(__dirname)
require('babel-register')
require('./server/server.js')

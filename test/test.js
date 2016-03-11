var assert = require('assert')
var expect = require('chai').expect
var supertest = require('supertest')
var app = require('../app').app
//import superagent from 'supertest'
//global.request = supertest.agent(app)
// import {
//   checkDuplicateLoginByEmail,
//   validateAuthorizationCode,
//   validateUserInfo,
//   destroySession,
//
// } from '../server/models/loginModel'


before(function(done) {
  global.request = supertest.agent(app)
   // runs before all tests in this block
  // global.request = supertest.agent(app.app)
  done()
})

after(function(done){
  //console.log('after')
  done()
})

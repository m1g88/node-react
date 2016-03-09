var assert = require('assert')
var expect = require('chai').expect

import {
  checkDuplicateLoginByEmail,
  validateAuthorizationCode,
  validateUserInfo,
  destroySession,

} from '../server/models/loginModel'



describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5))
      assert.equal(-1, [1,2,3].indexOf(0))
    })
    it('should return an array', function(){
      assert(Array.isArray('a,b,c'.split(',')))
    })
  })
})


describe('LoginModel', () => {
  const authorizationCode = '4/gfgvtXiphUCZj47HS4Nx-RW3QtSre9YrKIlMTaktLSA'
  let code = validateAuthorizationCode(authorizationCode)
  describe('oAuthLogin', ()=> {
    it('should rerture validateAuthorizationCode' , function (){
        expect(code).to.equal(authorizationCode)
    })
  })
})

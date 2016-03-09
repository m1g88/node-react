import {
  getUserInfoFromAuthCode
} from '../../models/GoogleOAuth'

import {
  checkDuplicateLoginByEmail,
  validateAuthorizationCode,
  validateUserInfo,
  destroySession,

} from '../../models/loginModel'
import Joi from 'joi'
import is from 'is_js'

export default (req, res, next) => {

  let authorizationCode = req.query.code
  console.log(`authorizationCode : ${authorizationCode}`)

  let response = {
    success: function(userInfo) {
      //console.log(`asdasd`,userInfo)
      req.session.regenerate((err) => {
        // will have a new session here
        if (err) {
          console.error(`[ regenerateSession ]`, err)
        } else {
          //console.error(`[ Regenerated ]`)
          req.session.userProfiles = userInfo
          res.status(200).redirect('/')
        }
      })
    },
    error: function() {
      console.error(`response error oAuthLogin.js `, e)
      res.sendStatus(500)
    }
  }

  validateAuthorizationCode(authorizationCode)
    .then(getUserInfoFromAuthCode)
    .then(validateUserInfo)
    .then(checkDuplicateLoginByEmail)
    .then(destroySession)
    .then(response.success)
    .catch(response.error)

}

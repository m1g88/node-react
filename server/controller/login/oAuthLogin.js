import {
  getUserInfoFromAuthCode
} from '../../models/GoogleOAuth'
import Joi from 'joi'

const userObjSchema = Joi.object().keys({
  id: Joi.string().alphanum(),
  email: Joi.string().email(),
  name: Joi.string().max(50),
  picture: Joi.string(),
  gender: Joi.string(),
  hd: Joi.string()
})

const authorizationCodeSchema = Joi.string().max(50)
let _userInfo

export default (req, res, next) => {

  let authorizationCode = req.query.code

  let response = {
    success: function() {
      req.session.regenerate((err) => {
        // will have a new session here
        if (err) {
          console.error(`[ regenerateSession ]`, err)
        } else {
          //console.error(`[ Regenerated ]`)
          req.session.userProfiles = _userInfo
          res.redirect('/')
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
    .catch(e => response.error(e))

}

/**
 * Get Session form session Stored
 * @param { object } objUserInfo
 * @return { promise }
 */
function checkDuplicateLoginByEmail(objUserInfo) {
  return new Promise((resolve, reject) => {
    sessionStore.all((error, sessions) => {
      if (error) {
        console.error(`[ CheckDuplicateLoginByEmail ]`, error)
        reject(error)
      } else {
        resolve(_.findKey(sessions, (o) => {
          return !_.isEmpty(o.userProfiles) &&
            !_.isEmpty(o.userProfiles.email) &&
            o.userProfiles.email == objUserInfo.email
        }))
      }
    })
  })
}

/**
 * Validate Authorize Code
 * @param { string } authorizationCode
 * @return { promise }
 */
function validateAuthorizationCode(authorizationCode) {
  return new Promise((resolve, reject) => {
    Joi.validate(authorizationCode, authorizationCodeSchema, (err, value) =>
      err ? reject(err) : resolve(value))
  })
}

/**
 * Validate User Object
 * @param { object } objUserInfo
 * @return { promise }
 */
function validateUserInfo(objUserInfo) {
  return new Promise((resolve, reject) => {
    Joi.validate(objUserInfo, userObjSchema, (err, value) => {
      if (err) {
        console.error(`[ Error ValidateUserInfo ] : ${err}`)
        reject(err)
      } else {
        //console.error(`[ ValidateUserInfo ] : ` , value)
        _userInfo = value
        resolve(value)
      }
    })
  })
}

/**
 * DestroySession Session by UUID
 * @param { string } SessionID
 * @return { promise }
 */
function destroySession(SessionID) {
  return new Promise((resolve, reject) => {
    let key = SessionID
    if (key) {
      sessionStore.destroy(key, (error) => {
        // error error here
        console.error(`[Error DestroySession : ${error}]`)
        reject(error)
      })
    }
    console.log(`[ DestroySession => ID : ${key}]`)
    resolve(true)
  })
}

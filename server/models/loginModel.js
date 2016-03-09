import Joi from 'joi'
import Is from 'is_js'

const userObjSchema = Joi.object().keys({
  id: Joi.string().alphanum(),
  email: Joi.string().email(),
  name: Joi.string().max(50),
  picture: Joi.string(),
  gender: Joi.string(),
  hd: Joi.string()
})

const authorizationCodeSchema = Joi.string().max(50)

/**
 * Get Session form session Stored
 * @param { object } objUserInfo
 * @return { promise }
 */
export function checkDuplicateLoginByEmail(objUserInfo) {
  return new Promise((resolve, reject) => {
    sessionStore.all((error, sessions) => {
      let duplicateSessionID
      if (error) {
        console.error(`[ CheckDuplicateLoginByEmail ]`, error)
        reject(error)
      }

      //if (sessions) {
        duplicateSessionID = _.findKey(sessions, (o) => {
          return !_.isEmpty(o.userProfiles) &&
            !_.isEmpty(o.userProfiles.email) &&
            o.userProfiles.email == objUserInfo.email
        })
        //console.log(`duplicateSessionID` , duplicateSessionID)
        //duplicateSessionID ? resolve(duplicateSessionID) : resolve(objUserInfo)

        resolve([duplicateSessionID,objUserInfo])
    })
  })
}

/**
 * Validate Authorize Code
 * @param { string } authorizationCode
 * @return { promise }
 */
export function validateAuthorizationCode(authorizationCode) {
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
export function validateUserInfo(objUserInfo) {
  return new Promise((resolve, reject) => {
    Joi.validate(objUserInfo, userObjSchema, (err, value) => {
      if (err) {
        console.error(`[ Error ValidateUserInfo ] : ${err}`)
        reject(err)
      } else {
        //console.log(`[ ValidateUserInfo ] : ` , value)
        //_userInfo = value
        resolve(value)
      }
    })
  })
}

/**
 * DestroySession Session by UUID
 * @param { [string , object] } data
 * @return { promise }
 */
export function destroySession(data) {
  //console.log(`destroySession` , data)
  let sessionID = data[0]
  let userInfo = data[1]
  return new Promise((resolve, reject) => {
    if (sessionID) {
      sessionStore.destroy(sessionID, (error) => {
        if (error) {
            console.error(`[Error DestroySession : ${error}]`)
          reject(error)
        }
      })
    }
    resolve(userInfo)
  })
}

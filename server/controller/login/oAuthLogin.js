import { getUserEmailFromAuthCode } from '../../utils/GoogleOAuth'

export default (req, res, next) => {

  const authorizationCode = req.query.code
  let _userInfo

  getUserEmailFromAuthCode(authorizationCode)
    .then((objUserInfo) => {
      //console.log(`objUserInfo : ` , objUserInfo)
      if (!objUserInfo) {
        res.sendStatus(403)
      }
      _userInfo = objUserInfo
      return objUserInfo

    })
    .then((objUserInfo) => {
      //_userInfo = objUserInfo

      return new Promise ((resolve, reject) => {
        global.sessionStore.all((error, sessions) => {
          if (error) {
            reject(error)
          }else{
            //console.log(sessions)
            resolve(sessions)
          }
        })
      })
    })
    .then((sessions) => {
      //console.log(`sessions : ` , sessions)
      return _.findKey(sessions, (o) => {
            return !_.isEmpty(o.userProfiles) &&
                !_.isEmpty(o.userProfiles.email) &&
                  o.userProfiles.email == _userInfo.email
                  })
    })
    .then((key) => {
      //console.log(`Dup key : ${key}`)
      if (key){
        sessionStore.destroy(key , (error) => {
  				// log error here
  			})
      }

      req.session.regenerate(function(err) {
        // will have a new session here
        if (err) {
          console.log(`post_login.js` , err)
        }
        //console.log(` session ID : `,req.sessionID)
        req.session.userProfiles = _userInfo
        res.redirect('/')
      })
      	//console.log('key :' + key)
    })
    .catch((e) => {
      console.log(`error => oAuthLogin.js ` , e)
      res.sendStatus(500)
    })
}

import { getUserEmailFromAuthCode } from '../../utils/GoogleOAuth'
//import { url } from '../../utils/GoogleOAuth'

export default (req, res, next) => {

  const authorizationCode = req.query.code
  let _userInfo
  getUserEmailFromAuthCode(authorizationCode)
    .then((objUserInfo) =>{
      console.log(`objUserInfo : ` , objUserInfo)
      if (!objUserInfo) {
        res.sendStatus(403)
      }
      //req.googleAuthUserInfo = objUserInfo
      return objUserInfo
      //next()
      //res.status(200).send(`Hi !!`)
    })
    .then((objUserInfo) => {
      //console.log(`objUserInfo ${objUserInfo.email}`)
      _userInfo = objUserInfo
      sessionStore.all((error, sessions) => {
    	 	if (error) {
          throw error
  			}else{
          return sessions
        }
      })
    })
    .then((sessions) => {
      console.log(`sessions : ${sessions}`)
      return _.findKey(sessions, (o) => {
            return !_.isEmpty(o.userProfiles) &&
                !_.isEmpty(o.userProfiles.username) &&
                  o.userProfiles.username == _userInfo.email
                  })
    })
    .then((key) => {
      if (key){
        sessionStore.destroy(key , (error) => {
  				// log error here
  			})
      }

      	//console.log('key :' + key)
    	req.session.userProfiles = _userInfo
    	res.redirect('/')
    })
    .catch(() => {
      res.sendStatus(500)
    })


}

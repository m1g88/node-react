import { getUserEmailFromAuthCode } from '../../utils/GoogleOAuth'
//import { url } from '../../utils/GoogleOAuth'

export default (req, res, next) => {

  const authorizationCode = req.query.code
  getUserEmailFromAuthCode(authorizationCode)
    .then((objUserInfo) =>{
      //console.log(`objUserInfo : ` , objUserInfo)
      if (!objUserInfo) {
        res.sendStatus(403)
      }
      req.googleAuthUserInfo = objUserInfo
      next()
      //res.status(200).send(`Hi !!`)
    })
    .catch(() => {
      res.sendStatus(500)
    })


}

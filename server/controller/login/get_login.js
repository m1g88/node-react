/* app.get /login */
//import GoogleOAuth from '../../utils/GoogleOAuth'
import { getOAuthUrl , url} from '../../utils/GoogleOAuth'

export default (req, res, next) => {
  /**
  * req.session provire by express-session
  */

  let userProfiles = req.session.userProfiles

  if (userProfiles) {
    req.session.destroy(err => {
      // cannot access session here
      // console.log(`get_login.js : ${userProfiles} : ${err}`)
      //console.log(err)
    })
  }
  // sessionStore.all((error, sessions) => {
  //   if (error) {
  //
  //   } else {
  //     console.log(`all session ==> `,sessions)
  //   }
  // })
  // console.log(`sessionID : ` , req.sessionID )
  res.status(200)
    .render('Login.handlebars' , {
      googleAuthUrl: url
    })
}

//export default getLogin

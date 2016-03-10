import {
  url
} from '../../models/GoogleOAuth'

export default (req, res, next) => {
  /**
   * req.session provire by express-session
   */
  let userProfiles = req.session.userProfiles

  if (userProfiles) {
    // destroy this session
    req.session.destroy(err => {
      console.error('Error destroy session :' , err)
    })
  }
  res.status(200)
    .render('Login.handlebars', {
      googleAuthUrl: url
    })
}

//export default getLogin

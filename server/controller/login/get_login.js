//import { rootpath } from 'rootpath'
require('rootpath')()
let url = require('server/models/GoogleOAuth').url
// import {
//   url
// } from 'server/models/GoogleOAuth'

export default (req, res, next) => {
  /**
   * req.session provire by express-session
   */
  let userProfiles = req.session.userProfiles

  if (userProfiles) {
    // destroy this session
    req.session.destroy(err => {

      if (err) {
        console.error('Error destroy session :' , err)
      }

      res.status(205).render('Login.handlebars', {
        googleAuthUrl: url
      })
    })
  } else {
    res.status(200).render('Login.handlebars', {
      googleAuthUrl: url
    })
  }

}

//export default getLogin

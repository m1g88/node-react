/* app.get /login */
import GoogleOAuth from '../../utils/GoogleOAuth'

export default (req, res, next) => {
  /**
  * req.session provire by express-session
  */

  let userProfiles = req.session.userProfiles

  new Promise((resolve, reject) => {
      GoogleOAuth((googleAuthUrl) => {
        // console.log(`googleAuthUrl is ${googleAuthUrl}`)
        if (googleAuthUrl) {
          resolve(googleAuthUrl)
        }
      })
  })
  .then((googleAuthUrl) => {
    //console.log(`googleAuthUrl is ${googleAuthUrl}`)

    // if (!userProfiles) {
    //   //console.log('no username')
    //   //res.status(200).render('Login.handlebars')
    // } else {
    //   req.session.destroy(err => {
    //     // cannot access session here
    //   })
    //
    // }

    if (userProfiles) {
      req.session.destroy(err => {
        // cannot access session here
        console.log(err)
      })
    }
    res.status(200)
      .render('Login.handlebars' , {
        googleAuthUrl: googleAuthUrl
      })
  })
}

//export default getLogin

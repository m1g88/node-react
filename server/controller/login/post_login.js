
export default (req, res) => {

  let objBody = req.body
  new Promise((resolve, reject) => {
  	sessionStore.all((error, sessions) => {
  	 	if (error) {
			  reject(err);
			} else {
				resolve(sessions)
			}
  	})
  })
  .then(sessions => {
    //console.log(`post login`,sessions)
  	/**
    * find Duplicate Session
    */
    return _.findKey(sessions, (o) => {
          return !_.isEmpty(o.userProfiles) &&
              !_.isEmpty(o.userProfiles.email) &&
                o.userProfiles.email == objBody.email
	              })
	})
	.then((key)=>{
	   // Duplicate Key
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
      req.session.userProfiles = req.body
      res.redirect('/')
    })
  })
}

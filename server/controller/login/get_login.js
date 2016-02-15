/* app.get /login */

export default (req,res,next) => {
	//console.log('login session id ' + req.sessionID)
		//console.log(req.session)
	  	let userProfiles = req.session.userProfiles

	    if (!userProfiles) {
	    	
	      //console.log('no username')
	      //res.status(200).render('Login.handlebars')
	    }else{
	      req.session.destroy( err => {
	      // cannot access session here
	      })

	    }

	res.status(200).render('Login.handlebars')
}
 
//export default getLogin
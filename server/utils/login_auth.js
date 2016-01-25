/* auth */

export default (req,res,next) => {
	
	global.sessionStore
		.get(req.sessionID,(error, session)=>{
			//console.log('current session is %s' ,req.sessionID );
			//console.log(global.sessionStore)
			if (session) {
				//console.log(true)
				next()
			}else{
				return res.redirect('/login')
				//console.log(false)
			}
		})
	


 //   console.log('auth')
 //   console.log(req.session.userProfiles)
	// let userProfiles = req.session.userProfiles
	// if (!userProfiles) {
	// 	return res.redirect('/login')
	// }

	// next()
}
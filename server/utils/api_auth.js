/* api auth */

export default (req,res,next) => {
	global.sessionStore
		.get(req.sessionID,(error, session)=>{
			//console.log('api auth current session is %s' ,req.sessionID );
			//console.log(session)
			if (!session) {
				//console.log('session gone')
				
				var data = { url : '/login'}
				res.status(500).json(data)

			}else{
				//console.log(next)
				next()
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
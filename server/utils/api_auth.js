/* api auth */

export default (req,res,next) => {
	try {
		global.sessionStore
			.get(req.sessionID,(error, session)=>{
				//console.log('api auth current session is %s' ,req.sessionID );
				//console.log(session)
				let userProfiles = req.session.userProfiles
				if (!userProfiles) {
					var data = { url : '/login'}
					res.status(401).json(data)

				}else{
					next()
				}
			})
	} catch (e) {

	} finally {
		res.status(400)
	}
 //   console.log('auth')
 //   console.log(req.session.userProfiles)
	// let userProfiles = req.session.userProfiles
	// if (!userProfiles) {
	// 	return res.redirect('/login')
	// }

	// next()
}

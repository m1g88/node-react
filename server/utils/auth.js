/* auth */

export default (req,res,next) => {
	
	global.sessionStore
		.get(req.sessionID,(error, session)=>{
			//console.log('current session is %s' ,session);
			//console.log(global.sessionStore)
			let userProfiles = req.session.userProfiles
			if (!userProfiles) {
				//console.log(true)
				return res.redirect('/login')
			}else{
				next()
				//console.log(false)
			}
		})
	
}
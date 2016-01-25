/* app.get /User */

export default (req,res,next) => {
	//console.log('User')
	  	let userProfiles = req.session.userProfiles;
	  	//console.log(userProfiles)
	  	//console.log(req.sessionID)
	    if (!userProfiles || userProfiles == '') {
	      //console.log('no username')
	      res.status(404)
	    }
	    //console.log(req.session)
	    res.setHeader('Cache-Control', 'no-cache')
	    res.status(200)
	    res.json(userProfiles)
		
}
 

//export default getLogin
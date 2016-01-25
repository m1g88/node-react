//import Promise from 'bluebird'

export default (req, res) => {

    let objBody = req.body

    new Promise((resolve, reject)=>{ 
    	 	sessionStore.all((error, sessions)=>{ 
    	 	if (error) {
				reject(err);
			} else {
				resolve(sessions)
			}
    	})
    })
    .then((sessions)=>{
    	/* return sessions SID */
	    return _.findKey(sessions, (o) => {
		    		return !_.isEmpty(o.userProfiles) && 
		    				!_.isEmpty(o.userProfiles.username) && 
		    					o.userProfiles.username == objBody.username
			})
	})
	.then((key)=>{
		/*  */
		if (key)
			sessionStore.destroy(key , (error) => {
				//log error here
			})

    	//console.log('key :' + key)
    	req.session.userProfiles = req.body
    	res.redirect('/')
    })
}



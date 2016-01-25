import express from 'express';


import getLogin from './controller/login/get_login'
import postLogin from './controller/login/post_login'
import loginAuth from './utils/login_auth'
import apiAuth from './utils/api_auth'
import getUser from './controller/user/get_user'


const router = express.Router();

router.get('/login', getLogin)
router.post('/login', postLogin)



//router.use('/api/*' , apiAuth)

//app.use(loginAuth)
router.get('/api/user',apiAuth,getUser)

/* API Middelware */
router.get('/api/test',apiAuth,(req,res) => {
	//console.log('4')
	//let data = JSON.parse(req.body);
	//console.log(req.body);
	// global.sessionStore.all(function(error, all){
	// 	console.log(all)
	// })
	//console.log()
 	//let userProfiles = req.session.userProfiles
 	//console.log(userProfiles);
	//let objData = userProfiles
	//console.log(typeof req.body);
	//console.log(req.body);
	//console.log(res.headers)
	res.status(200)
	res.setHeader('Cache-Control', 'no-cache')
	res.json()
	res.end()
	//next()
})

router.use(loginAuth)

export default router
//module.exports = router;

import express from 'express'


import getLogin from './controller/login/get_login'
import postLogin from './controller/login/post_login'
import auth from './utils/auth'
import apiAuth from './utils/api_auth'
import getUser from './controller/user/get_user'
import oAuthLogin from './controller/login/oAuthLogin'

const router = express.Router()

router.get('/login', getLogin)
router.post('/login', postLogin)


router.get('/login/googleOAuth',oAuthLogin)
// router.use('/api/*' , apiAuth)

// app.use(loginAuth)
router.get('/api/user', apiAuth, getUser)

/**
* Example API Middelware
*/
router.get('/api/test', apiAuth, (req, res) => {
  res.status(200)
  res.setHeader('Cache-Control', 'no-cache')
  res.json()
  res.end()
    //next()
})

router.use(auth)

export default router
//module.exports = router;

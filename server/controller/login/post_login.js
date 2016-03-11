import request from 'superagent'
import path from 'path'
import config from '../../../config/dev_conf'

const url = `${config.paynow_url}:${config.port}/paynow/1/auth`

export default (req, res) => {

  // console.log('url' , url)
  let xToken
  let objBody = req.body
  let postData = {
    email : objBody.email,
    password : objBody.password
  }

  // let postData = {
  //   email : config.admin_email,
  //   password : config.admin_password
  // }

  // console.log('postdata', postData)

  new Promise((resolve,reject) => {
    try {
      request
         .post(url)
         .set('Content-Type', 'application/json')
         .send(postData)
         .end(function(err, res){
           if (err && err.status === 404) {
             reject([err.status,res.body.message])
           }
           else if (err) {
             reject([err.status,res.error])
           }
           //console.log(res)
           resolve(res.body)
         })
    } catch (e) {
      resolve(e)
    }
  })
  // .then((res) => {
  //   console.log(res)
  // })
  .then((res)=>{
    xToken = res.token
    return new Promise((resolve, reject) => {
      sessionStore.all((error, sessions) => {
        if (error) {
          reject(err)
        } else {
          resolve(sessions)
        }
      })

    })
  })
  .then((sessions) => {
    //console.log(`post login`,sessions)
  	/**
    * find Duplicate Session
    */
    return _.findKey(sessions, (o) => {
      return !_.isEmpty(o.userProfiles) &&
              !_.isEmpty(o.userProfiles.email) &&
                o.userProfiles.email == postData.email
    })
  })
  .then((key) => {
    if (key){
      sessionStore.destroy(key , (error) => {
        if (error) {
          console.log(`post_login.js => ` , error)
        }
      })
    }
    req.session.regenerate(function(err) {
      if (err) {
        console.log(`post_login.js` , err)
      }
    //console.log(` session ID : `,req.sessionID)
      req.session.userProfiles = { email : postData.email , token : xToken}
      //res.redirect('/')
      res.status(200)
      res.json('asdsd')
    })
  })
  .catch((e) => {
    res.status(400)
    res.json('User or password is not valid')
    //console.error(e)
  })
}

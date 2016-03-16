import request from 'superagent'
import config from '../../../config/dev_conf'
import joi from 'joi'
import {
  RequestMethod,
  callRequest,
  responseSuccess,
  responseError
  } from '../../libs/helper'

const url = `${config.paynow_url}:${config.port}/paynow/1/auth`

export default (req, res) => {
  // console.log('url' , url)
  let xToken
  //let objBody = req.body
  let postData = {
    email : req.body.email,
    password : req.body.password
  }

  let schema = joi.object().keys({
    email : joi.string().email(),
    password : joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
  })

  new Promise((resolve,reject) => {
    joi.validate(postData, schema, function (err, value) {
      if (err) {
        reject(err)
      } else {
        resolve(value)
      }
    })
  })
  .then(value => callRequest(url,value,RequestMethod.POST))
  .then(data => {
    xToken = data.token
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
  .then(sessions => {
    return _.findKey(sessions, (o) => {
      return !_.isEmpty(o.userProfiles) &&
              !_.isEmpty(o.userProfiles.email) &&
                o.userProfiles.email == postData.email
    })
  })
  .then(() => {
    req.session.regenerate(function(err) {
      if (err) {
        console.log(`post_login.js` , err)
      }
      req.session.userProfiles = { email : postData.email , token : xToken}
      responseSuccess(req,res,[200])
    })
  })
  .catch((e) => {
    responseError(req,res,[400,'User or password is not valid'])
    // res.status(400)
    // res.json('User or password is not valid')
    //console.error(e)
  })
}

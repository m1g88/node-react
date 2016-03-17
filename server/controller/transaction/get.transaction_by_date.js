import request from 'superagent'
import config from '../../../config/dev_conf'
import {
  RequestMethod,
  callRequest,
  responseSuccess,
  responseError,
  datetimeQueryString
  } from '../../libs/helper'

import { DateTimeFormat } from '../../libs/const'
import moment from 'moment'
import joi from 'joi'

const url = `${config.paynow_url}:${config.port}/paynow/1/auth/transaction?date=`

export default (req, res, next) => {

  let userProfiles = req.session.userProfiles
  let objBody = {
    dateFrom : req.body.dateFrom ,
    dateTo : req.body.dateTo
  }

  let schema = joi.object().keys({
    dateFrom : joi.date().format(DateTimeFormat.YYYYMMDD),
    dateTo : joi.date().format(DateTimeFormat.YYYYMMDD)
  })

  new Promise((resolve,reject) => {
    joi.validate(objBody, schema, function (err, value) {
      if (err) {
        reject(err)
      } else {
        resolve(value)
      }
    })
  })
  .then((value) => callRequest())


}

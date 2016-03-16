import request from 'superagent'
import morgan from 'morgan'
import moment from 'moment'
export const RequestMethod = {
  GET : 0,
  POST : 1,
  PUT : 2,
  DELETE : 3
}

function responseSuccess (req, res, data){
  data = _.toArray(data)
}


export function callRequest (url,data,method = 'GET') {
  try {
    switch (method) {
      case RequestMethod.GET :
        return get(url, data)
        break
      case RequestMethod.POST :
        return post(url, data)
        break
      case RequestMethod.PUT :
        //return post(url, data)
        break
      case RequestMethod.DELETE :
        //return post(url, data)
        break
      default:
        return get(url, data)
    }

  } catch (e) {
    throw e
  }

}

function post (url,data) {
  return new Promise ((resolve,reject) => {
    request
       .post(url)
       .set('Content-Type', 'application/json')
       .send(data)
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
  })
}

function put (url,data) {
  return new Promise ((resolve,reject) => {
    request
       .put(url)
       .set('Content-Type', 'application/json')
       .send(data)
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
  })
}

function get (url,data) {
  return new Promise ((resolve,reject) => {
    request
       .get(url)
       .set('Content-Type', 'application/json')
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
  })
}


export function responseSuccess (req, res, obj) {
  //console.log('res' , res)
  let data = Array.from(obj)
  if (data.length == 2){
    res.status(data[0]).json(data[1])
  } else if (data[0] == 200){
    res.sendStatus(200)//.send()
  } else if (data[0] == 202){
    res.sendStatus(202)
  } else {
    responseError(req, res)
  }
}

export function responseError (req, res, err) {
    //console.log('res' , res)
  let error = Array.from(err)
  //console.log(error)
  if (error.length == 2){
    res.status(error[0]).json({error: error[1]})
  } else {
    res.sendStaus(500)
  }
}
//
Date.prototype.addDays = function(days) {
  var dat = new Date(this.valueOf())
  dat.setDate(dat.getDate() + days)
  return dat
}


/**
* get number of days between two date
* @param { Datetime } startDate
* @param { Datetime } stopDate
* @return { Number }
*/
export function dateDiff(date1,date2) {
  // if (!date1 && !date2) {
  //   return 0
  // }
  let dateFrom = new Date(moment.utc(date1))
  let dateTo = new Date(moment.utc(date2))
  let timeDiff = Math.abs(dateTo.getTime() - dateFrom.getTime())
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))

  return diffDays
}

/**
* convert 2 Datetime to Array date between that
* @param { Datetime } startDate
* @param { Datetim } stopDate
* @return { Array } date format 'YYYYMMDD'
*/
export function getBetweenDateArray(startDate, stopDate , dateFormat = 'YYYYMMDD') {
  var dateArray = []
  var currentDate = startDate
  while (currentDate <= stopDate) {
    dateArray.push(moment(currentDate).format(dateFormat))
    currentDate = currentDate.addDays(1)
  }
  //console.log(dateArray)
  return dateArray
}

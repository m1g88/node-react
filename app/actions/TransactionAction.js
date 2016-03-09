import request from 'superagent'
import AppDispatcher from '../dispatcher/AppDispatcher'
//import { APP_GET_USERPROFILE } from '../constants/TodoConstants'
import AppConstants from '../constants/AppConstants'


const getUser = 'api/user'

/**
* @param  {string} text
*/
export function getUserProfiles(postData) {
 	//console.log(`app action`)
  request
  .post(getUser)
  .send(postData)
  .end((err, res) => {
    if (err) return console.log(`AppActions.js ${err}`)
    //console.log(res)
    AppDispatcher.dispatch({
      type: AppConstants.TRANSACTION_GET_TRANSACTION_BETWEEN_DATE,
      data: res.body
    })
  })

}

import request from 'superagent'
import AppDispatcher from '../dispatcher/AppDispatcher'
//import { APP_GET_USERPROFILE } from '../constants/TodoConstants'
import HomeConstants from '../constants/HomeConstants'


const sourceUrl = `api/test`

/**
* @param  {string} text
*/
export function getDataSource() {
 	//console.log(`Home action`)
  request.get(sourceUrl).end((err, res) => {
    if (err) return console.log(`HomeActions.js ${err}`)
    //console.log(`Home`, res.body)
    AppDispatcher.dispatch({
      type: HomeConstants.HOME_GET_DATASOURCES,
      source: res.body
    })
  })

}

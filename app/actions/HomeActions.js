import request from 'superagent';
import AppDispatcher from '../dispatcher/AppDispatcher'
//import { APP_GET_USERPROFILE } from '../constants/TodoConstants'
import HomeConstants from '../constants/HomeConstants'


const sourceUrl = `https://www.datatables.net/examples/ajax/data/arrays.txt?_=1456368826806`

/**
* @param  {string} text
*/
export function getDataSource() {
 	//console.log(`Home action`)
 	request.get(`api/test`)
	  .end((err, res) => {
	    if (err) return console.log(`HomeActions.js ${err}`)
	    //console.log(`Home`, res.body)
	    AppDispatcher.dispatch({
	      type: HomeConstants.HOME_GET_DATASOURCES,
	      source: res.body
	    })
	  })

  }

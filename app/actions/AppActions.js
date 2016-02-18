import request from 'superagent';
import AppDispatcher from '../dispatcher/AppDispatcher'
//import { APP_GET_USERPROFILE } from '../constants/TodoConstants'
import AppConstants from '../constants/AppConstants'


const getUser = `api/user`

/**
* @param  {string} text
*/
export function getUserProfiles() {
 	//console.log(`app action`)
 	request.get(getUser)
	  .end((err, res) => {
	    if (err) return console.log(`AppActions.js ${err}`)
	    //console.log(res)
	    AppDispatcher.dispatch({
	      type: AppConstants.APP_GET_USERPROFILE,
	      userProfiles: res.body
	    });
	  });

  }

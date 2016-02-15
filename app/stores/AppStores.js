
import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import AppConstants from '../constants/AppConstants'

//var assign = require('object-assign');

const CHANGE_EVENT = 'change';
let userProfiles = {};

/**
 * AppStore
 */
class AppStore extends EventEmitter {

   /**
   * constructor
   */
  constructor() {
    super();

    this.dispatchToken = AppDispatcher.register( action => {
    	//console.log(`this action is ${action.type}`)
      switch (action.type) {
        case AppConstants.APP_GET_USERPROFILE :
          userProfiles = action.userProfiles;
          //console.log(`app store ${ userProfiles.username }`)
          this.emitChange();
          break;
        // case RECEIVE_TRACKS_BY_COUNTRY:
        //   tracks = action.tracks;
        //   this.emitChange();
        //   break;
      }
    });
  }

  /**
   * @emit change event
   */
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  /**
   * listen change event
   * @param {function} callback
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  /**
   * remove listened change event
   * @param {function} callback
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  /**
   * return all tracks
   * @return {array} all tracks
   */
  getAll() {
    return userProfiles;
  }

}

export default new AppStore()
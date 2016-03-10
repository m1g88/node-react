
import AppDispatcher from '../dispatcher/AppDispatcher'
import { EventEmitter } from 'events'
import AppConstants from '../constants/AppConstants'

//var assign = require('object-assign');

const CHANGE_EVENT = 'change'
let source = []

/**
 * AppStore
 */
class TransactionStore extends EventEmitter {

   /**
   * constructor
   */
  constructor() {
    super()

    this.dispatchToken = AppDispatcher.register( action => {
    	//console.log(`HomeStores action is ${action.type}`)
      switch (action.type) {
        case AppConstants.TRANSACTION_GET_TRANSACTION_BETWEEN_DATE :
          // copy array
          source = action.source.slice()
          this.emitChange()
          break
        // case RECEIVE_TRACKS_BY_COUNTRY:
        //   tracks = action.tracks;
        //   this.emitChange();
        //   break;
      }
    })
  }

  /**
   * @emit change event
   */
  emitChange() {
    //console.log(`emitChange`)
    this.emit(CHANGE_EVENT)
  }
  /**
   * listen change event
   * @param {function} callback
   */
  addChangeListener(callback) {
    //console.log(`changing` , callback)
    this.on(CHANGE_EVENT, callback)
  }
  /**
   * remove listened change event
   * @param {function} callback
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }
  /**
   * return all tracks
   * @return {array} all tracks
   */
  getAll() {
    //console.log(`home store get all`)
    return source
  }

}

export default new TransactionStore()

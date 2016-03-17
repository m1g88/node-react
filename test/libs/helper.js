import { getEveryDaysBetweenDate , dateDiff ,datetimeQueryString} from '../../server/libs/helper'
import { expect } from 'chai'
import moment from 'moment'

describe('libs / Helper', ()=> {

  let increaseDays = 5
  let expectDiffDate = increaseDays + 1

  before(function() {
    Date.prototype.addDays = function(days) {
      var dat = new Date(this.valueOf())
      dat.setDate(dat.getDate() + days)
      return dat
    }
  })

  // after(function() {
  //    // runs after all tests in this block
  // })

  it('should return number fo Different Datetime' , function (done){
    expect(dateDiff('20150101','20150103')).to.equal(2)
    //expect(diffDate).to.equal(increaseDays)
    done()
  })

  // it('should return Array Datetime' , function (done){
  //   let dateArray = getEveryDaysBetweenDate(new Date(), (new Date()).addDays(increaseDays))
  //   let a = moment(dateArray[0])
  //   expect(a).to.not.equal('Invalid date')
  //   expect(dateArray).to.have.length(expectDiffDate)
  //   done()
  // })

  it('should return every days between selected date' , function (done){
    let b =   {
      dateFrom : '20150101',
      dateTo : '20150107'
    }
    let dateArray = datetimeQueryString(b)
    expect(dataArray).to.be.a('string')
    done()
  })



})

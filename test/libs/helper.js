import { getBetweenDateArray , dateDiff } from '../../server/libs/helper'
import { expect } from 'chai'
import moment from 'moment'

describe('libs / Helper', ()=> {

  let increaseDays = 5
  let expectDiffDate = increaseDays + 1

  // before(function() {
  //   expectDiffDate = 5
  //   //let diffDate = dateDiff(new Date(), (new Date()).addDays(expectDiffDate))
  // })
  //
  // after(function() {
  //    // runs after all tests in this block
  // })

  it('should return number fo Different Datetime' , function (done){
    //expect(dateDiff('20150101','20150103')).to.equal(2)
    let diffDate = dateDiff(new Date(), (new Date()).addDays(increaseDays))
    expect(diffDate).to.equal(increaseDays)
    done()
  })

  it('should return Array Datetime' , function (done){
    let dateArray = getBetweenDateArray(new Date(), (new Date()).addDays(increaseDays))
    let a = moment(dateArray[0])
    expect(a).to.not.equal('Invalid date')
    expect(dateArray).to.have.length(expectDiffDate)
    done()
  })

})

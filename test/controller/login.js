
//require('../test.js')

describe('LoginController', ()=> {

  //describe('LoginController', () => {

  it('should return status 200 when get paysbuy page ' , function (done){
    //console.log(request)
    request
      .get('/login')
      .expect('Content-Type', /html/)
      .expect(200, done)
  })

  it('should return status 200 when login sucess' , function (done){
    request
      .post('/login')
      .send({email : 'new@paysbuy.co.th' , password : 'idontknow'})
      .expect(200,done)
  })

  it('should return status 400 when login fail' , function (done){
    request
      .post('/login')
      .send({email : 'new@paysbuy.co.th' , password : 'idontknoww'})
      .expect(400,done)
  })

  it('should return status 204 when logout success' , function (done){
    request
      .get('/login')
      .expect('Content-Type', /html/)
      .expect(205, done)
  })

  //})

})

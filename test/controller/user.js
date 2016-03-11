
describe('UserController', ()=> {

  describe('With Login Success', ()=> {

    beforeEach(function(done){
        //console.log(request)
      request
        .post('/login')
        .send({email : 'new@paysbuy.co.th' , password : 'idontknow'})
        .expect(200,done)

    })
    //
    afterEach(function (done) {
      request
        .get('/login')
        .expect('Content-Type', /html/)
        .expect(205, done)
    })

    it('should return status 200 when get userProfile' , function (done){
      request
       .get('/api/user')
       .expect('Content-Type', /json/)
       .expect(200, done)
    })

  })

  describe('With out Login', ()=> {

    it('should return status 401 when get userProfile' , function (done){
      request
       .get('/api/user')
       .expect('Content-Type', /json/)
       .expect(401, done)
    })

  })

})

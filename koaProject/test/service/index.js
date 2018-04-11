const superagent = require('supertest')
const app = require('../../app')

function request() {
  return superagent(app.listen())
}

describe('node接口测试', function() {
  it('add-one接口测试', function(done) {
    request()
      .get('/add-one')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        console.log('点赞+1成功了')
        if (res.success) {
          console.log('点赞+1成功了')
          done()
        } else {
          done(err)
        }
      })
  })

  it('get-count接口测试', function(done) {
    request()
      .get('/get-count')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        console.log('点赞+1成功了')
        if (res.success) {
          console.log('获取点赞数成功了')
          done()
        } else {
          done(err)
        }
      })
  })
})

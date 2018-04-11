const superagent = require('supertest')
const app = require('../../app')

function request() {
  return superagent('http://192.168.1.105:8070/riskquery_api')
}

describe('中信银行接口测试', function() {
  it('详情页是否收藏接口测试', function(done) {
    request()
      .post('/myCollection/isCollection?entId=111084661')
      // .send({ 'entId': 111084661 })
      .set('Access-Control-Request-Headers', 'authorization')
      .set('Authorization', '02700813-8d71-4199-bf71-533c6b10fea6')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(function(res) {
        if (res.body.code !== 1 && res.body.data !== '1') {
          throw new Error(
            '返回参数不正确**(' + JSON.stringify(res.body) + ')**'
          )
        }
      })
      .end(function(err, res) {
        done()
      })
  })
})

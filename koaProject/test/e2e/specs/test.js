const Rize = require('rize')
const rize = new Rize({ headless: false })

module.exports = rize
  .goto('http://localhost:3000/index')
  .assertTitle('点赞+1小程序')
  .assertSee('点赞数')
  .click('#handWrap')
  .assertClassHas('add-animate', 'active')
  .end()

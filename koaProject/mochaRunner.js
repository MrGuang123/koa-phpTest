const Mocha = require('mocha')
const glob = require('glob')
const path = require('path')
const mocha = new Mocha({
  reporter: 'mochawesome',
  reporterOptions: {
    reporteDir: './reporter/mochawesome-reporter'
  }
})

const testDir = './test/service/'

glob.sync(path.join(testDir, '*.js')).forEach(file => mocha.addFile(file))


mocha.run(function(err) {
  console.log('done')
  process.exit(err)
})

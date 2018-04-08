const path = require('path')
const chalk = require('chalk')
const glob = require('glob')

const log = err => console.log(chalk.red(err))

const files = glob.sync(path.join(__dirname, './specs/*.js'))


// files.reduce((chain, file) => {
//   console.log(chain)
//   console.log(file)
// })

files.reduce(async (chain, file) => chain.then(() => require(file).default), Promise.resolve());

process.on('uncaughtException', (error) => log(error));

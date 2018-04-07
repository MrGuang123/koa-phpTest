const axios = require('axios')

const instance = axios.create({
  baseURL: 'http://192.168.43.1/secondWeek/web/index.php?r=site',
  method: 'get',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

const addData = () => {
  return instance.request({ url: '/add' }).then(ret => {
    return ret.data
  })
}

const countData = () => {
  return instance.request({ url: '/get-count' }).then(ret => {
    return ret.data
  })
}

const dataModels = {
  addData,
  countData
}
module.exports = dataModels

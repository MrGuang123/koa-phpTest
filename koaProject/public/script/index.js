window.onload = function() {
  var hand = document.querySelector('#handWrap')
  hand.addEventListener(
    'click',
    function(e) {
      axios
        .request({
          url: '/add-one',
          baseURL: 'http://localhost:3000',
          method: 'get',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        })
        .then(ret => {
          var smalLabel = document.querySelector('.add-animate')
          smalLabel.className = 'add-animate'
          setTimeout(function() {
            smalLabel.className = 'add-animate active'
          }, 0)
          getCount()
        })
    },
    false
  )
}

function getCount() {
  return axios
    .request({
      url: '/get-count',
      baseURL: 'http://localhost:3000',
      method: 'get',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
    .then(ret => {
      var number = document.querySelector('#thumbNums span')
      number.innerHTML = ret.data.count
    })
}

window.onload = function() {
    var hand = document.querySelector('#handWrap')
    hand.addEventListener('click', debounce(function(e) {
        axios.request({
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
    },1000,true),false)
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

// 防抖函数
function debounce(fn,delay,immediate){
    var timer = null

    return function(){
        var _this = this
        var args = arguments
        if(timer) clearTimeout(timer)

        if(immediate){
            var doNow = !timer
            timer = setTimeout(function(){
                timer = null
            },delay)
            if(donow){
                fn.apply(_this,args)
            }
        }else {
            timer = setTimeout(function(){
                fn.apply(_this,args)
            },delay)
        }

    }
}


// 节流函数
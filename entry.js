var show = require('./uxer-show')

var slider = show('stage', 'left', 1)

setTimeout(function(){
	slider.goTo(4)
}, 1000)

setTimeout(function(){
	slider.prev()
}, 2000)

setTimeout(function(){
	slider.next()
}, 3000)

setTimeout(function(){
	slider.next()
}, 4000)

setTimeout(function(){
	slider.prev()
}, 5000)
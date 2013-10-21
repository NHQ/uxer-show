# uxer-show

The show is about to begin...

## usage

This browserify-able module makes a slideshow out of an parent element's children. The only style modifications it makes is to translate the slides. There are no css files (although you can see the demo css in /public). All other styles, including transition timing, must be defined by you.

The constructor takes a three params: parent ID, direction ('top' || 'left'), and an starting index.

And it returns 3 functions: previous(), next(), and goTo(index).

The current element is given css class 'scene'.

See the example below.

## example

```js
var show = require('./')

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
```
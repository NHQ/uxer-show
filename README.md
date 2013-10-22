# uxer-show

Pure javascript slider logic.  The show is about to begin...

```
npm install uxer-show
```

## usage

This browserify-like module makes a slideshow out of a parent element's children. It works vertically and horizontally.

The only style modifications it makes is to translate the slides. There are no css files (although you can see the demo css in /public). All styles, including transition timing, are for you to decide.

The constructor takes a three params: parent ID, direction ('top' || 'left'), and an starting index. 'left' is for horzintal transitions, 'top' for vertical. 

It returns 3 functions: previous(), next(), and goTo(index).

The current element is given css class 'scene'.

See the example below.

## demo

to run the demo
```bash
git clone git@github.com:NHQ/uxer-show.git
npm install -g watchify opa
cd uxer-show
opa
```
watchify is browserify w/ file watching
[opa](https://github.com/NHQ/opa) is a speedy way to prototype front-end stuff

## example

```js
var show = require('uxer-show')
var prev = document.getElementById('prev')
var next = document.getElementById('next')

var slider = show('stage', 'left', 0)
next.addEventListener('click', slider.next)
prev.addEventListener('click', slider.prev)

setTimeout(function(){
	slider.goTo(4)
}, 1000)
```
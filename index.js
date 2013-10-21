var setStage = require('./setStage');
var prefixer = require('./prefix');

module.exports = show

var doc = document;
var body = doc.body;
var iw = window.innerWidth;
var ih = window.innerHeight;
var prefix = prefixer().css

function show(title, direction, start){	
	var theatre = setStage(title, direction)
	var stage = theatre.stage
	var players = theatre.players
  var property = direction.toLowerCase() == 'left' ? 'width' : 'height'
  var t = direction.toLowerCase() == 'left' ? 'x' : 'y';
	var offset = 0;
	var currentIndex = start || 0

	centerPiece(players[currentIndex])
	
	return {goTo: centerPiece, next: next, prev: prev}

	function next(){
		var index = currentIndex + 1;
		if(index > players.length - 1) index = 0
		centerPiece(index)
		return currentIndex = index
	}
	
	function prev(){
		var index = currentIndex - 1;
		if(index < 0) index = players.length - 1
		centerPiece(index)
		return currentIndex = index
	}

	function centerPiece(el){
		if('string' == typeof el) el = doc.getElementById(el) 
		else if(!(isNaN(el))) el = players[el] 
 		if(!el) throw new Error('No element')

    var set = (stage.uxer[property] / 2) - (el.uxer[property] / 2);
		var cue = (el.uxer[direction] + offset)
		var diff = set - cue + offset
		players.forEach(function(e, i){
			e.classList.remove('scene');
			if(e.id == el.id) {
				e.classList.add('scene');
				currentIndex = i
			}
			e.style['-'+prefix+'-transform'] = 'translate'+t+'('+ (diff) +'px)'
			e.style['transform'] = 'translate'+t+'('+ (diff) +'px)'
		})
		offset = diff
		return currentIndex
	}		

}


/*
  Changing the index of a Player and resetting the stage should work for wraparounds
  and continuous scrolling.
*/
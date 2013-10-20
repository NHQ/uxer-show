var setStage = require('./setStage')
;

var doc = document;
var body = doc.body;
var iw = window.innerWidth;
var ih = window.innerHeight;

Glider('stage', 'left')

function Glider(title, direction, notes){
	
	var theatre = setStage(title, direction)
	var stage = theatre.stage
	var players = theatre.players
  var property = direction.toLowerCase() == 'left' ? 'width' : 'height'
  var t = direction.toLowerCase() == 'left' ? 'x' : 'y';
	var offset = 0;

	centerPiece(players[0])

	function centerPiece(el){
		if('string' == typeof el) el = doc.getElementById(el) 
		else if(!(isNaN(el))) el = players[el] 
 		if(!el) throw new Error('No element')

    var set = (stage.uxer[property] / 2) - (el.uxer[property] / 2);
		var cue = (el.uxer[direction] + offset)
		var diff = set - cue + offset
		players.forEach(function(e){
			e.classList.remove('scene');
			if(e.id == el.id) e.classList.add('scene')
			e.style['-webkit-transform'] = 'translate'+t+'('+ (diff) +'px)'
		})
		offset = diff
	}		

}


/*
  Changing the index of a Player and resetting the stage should work for wraparounds
  and continuous scrolling.
*/
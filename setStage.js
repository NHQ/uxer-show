var castCall = require('./castCall.js');
var getCSS = require('compute-style');
var doc = window.document;
var body = doc.body;

module.exports = function(title, direction){
	
	var stage = window.stage = doc.getElementById(title);
	var players = window.players = castCall(stage.children, direction);
	var property = direction.toLowerCase() == 'left' ? 'width' : 'height'
  var propertyValue = players.reduce(function(e, i){
	  return e + i.uxer[property]
  }, 0)

	stage.uxer = {};
	stage.uxer.width = getCSS(stage, 'width').primitive.val;
	stage.uxer.height = getCSS(stage, 'height').primitive.val;
	stage.uxer.left = getCSS(stage, 'left').primitive.val
	stage.uxer.top = getCSS(stage, 'top').primitive.val
	stage.uxer.right = getCSS(stage, 'right').primitive.val
	stage.uxer.bottom = getCSS(stage, 'bottom').primitive.val
	
	return {stage: stage, players: players}
	
}
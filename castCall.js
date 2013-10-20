var uuid = require('short-id')
var getCSS = require('compute-style')
;

module.exports = function(children, direction){
	
	var players = Array.prototype.map.call(stage.children, function(player,i){
		player.id += uuid.generate()
		player.uxer = {};
		player.uxer.width = getCSS(player, 'width').primitive.val
		player.uxer.height = getCSS(player, 'height').primitive.val
		
		return player
	});
	
	var total = 0
	var property = direction.toLowerCase() == 'left' ? 'width' : 'height'
	
	players.forEach(function(player, i){
		var left = players[i-1] ? players[i-1].uxer[property] : 0;
		total += left;
		player.uxer[direction] = total;
		player.style[direction] = total + 'px';
	})
	
	return players
	
}
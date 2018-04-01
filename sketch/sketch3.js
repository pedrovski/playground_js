/*
window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame       || 
		window.webkitRequestAnimationFrame || 
		window.mozRequestAnimationFrame    || 
		window.oRequestAnimationFrame      || 
		window.msRequestAnimationFrame     || 
		function( callback ){
			window.setTimeout(callback, 1000 / 60);
		};
})();
*/

var canvas = document.getElementById("sketch");
var	ctx = canvas.getContext("2d");
var	mouse = {
	x : -1,
	y : -1
};

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

ctx.font = '48px serif';

document.addEventListener("mousemove", function(e) {
		var rect = canvas.getBoundingClientRect();
		var clippedX = e.pageX - rect.left;
		var clippedY = e.pageY - rect.top;

		if (clippedX < 0) {
			clippedX = -1;
		}else if (e.pageX > rect.right) {
			clippedX = -1;
		}

		if (clippedY < 0) {
			clippedY = -1;
		}else if (e.pageY > rect.bottom) {
			clippedY = -1;
		}

		if ( (clippedX === -1) || (clippedY === -1) ) {
			clippedX = -1;
			clippedY = -1;
		}

		mouse.x = Math.round(clippedX);
		mouse.y = Math.round(clippedY);
}, false);

(function animloop(){
	window.requestAnimationFrame(animloop);
	update();
})();

function update() {
	var mousePos = '(' + mouse.x + ',' + mouse.y + ')';
	//ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillText('Mouse Pos : ' + mousePos, 10, 50);
}
// A simple library to abstract and simplify chunks of javascript that I'm frequently writing.

var TBY = {};

TBY.test = function() {
	console.log('This is test.')
};

TBY.makeDiv = function(x, y, color){
	var box = document.createElement('div');
	box.style.height = y + 'px';
	box.style.width = x + 'px';
	box.style.backgroundColor = color;
	return box
};
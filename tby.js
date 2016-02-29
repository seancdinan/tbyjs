// A simple library to abstract and simplify chunks of javascript that I'm frequently writing.
var TBY = {};

// THINGS THAT ANNOY ME AND SHOULD BE ABSTRACTED:
// creating elements:
// normal way: var name = document.creatElement('type');
// name.id = 'name';
// parent.appendChild(name);

TBY.make = function(type, name, properties, inner) {
	// Creates a doc element of type 'type' with id 'name' and
	// (optional) style properties defined by the properties object
	// e.g. {height: 100px, width: 400px}
	// (optional) innerHTML 'inner' for text and whatnot.
	this.element = document.createElement(type);
	this.element.id = name;
	if (properties != undefined){
		for (var i in properties){
			this.element.style[i]  = properties[i];
		}
	}
	if (inner != undefined){
		this.element.innerHTML = inner;
	}
	return this.element
};


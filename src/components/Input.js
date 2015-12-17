function Input() {
	this.keys = {};
	this.keysDownThisFrame = {};
	this.keysUpThisFrame = {};
	this.mousePosition = {};
	this.mouseButtons = {};
	this.mouseButtonsDownThisFrame = {};
	this.mouseButtonsUpThisFrame = {};
}

Input.prototype.getMousePosition = function getMousePosition() {
	return this.mousePosition;
};

Input.prototype.getMouse = function getMouse(mouseButtonCode) {
	return this.mouseButtons[mouseButtonCode];
};

Input.prototype.getMouseDown = function getMouseDown(mouseButtonCode) {
	return this.mouseButtonsDownThisFrame[mouseButtonCode];
};

Input.prototype.getMouseUp = function getMouseUp(mouseButtonCode) {
	return this.mouseButtonsUpThisFrame[mouseButtonCode];
};

Input.prototype.getKey = function getKey(keyCode) {
	return this.keys[keyCode];
};

Input.prototype.getKeyDown = function getKeyDown(keyCode) {
	return this.keysUpThisFrame[keyCode];
};

Input.prototype.getKeyUp = function getKeyUp(keyCode) {
	return this.keysUpThisFrame[keyCode];
};

Input.prototype.name = "Input";

Input.Keys = {
	'BACKSPACE': 8,
  'TAB': 9,
  'ENTER': 13,
  'SHIFT': 16,
  'CTRL': 17,
	'ALT': 18,
	'OPT': 18,
	'CMD': 91,
	'WINDOWS': 91,
  'SPACE': 32,
  'LEFT': 37,
  'UP': 38,
  'RIGHT': 39,
  'DOWN': 40,
};

var i;

// Characters
for (i = 97; i < 123; i++) {
	Input.Keys[String.fromCharCode(i).toUpperCase()] = i - 32;
}
// Numbers
for (var i = 48; i < 58; i++) {
	Input.Keys[i - 48] = i;
}

module.exports = Input;
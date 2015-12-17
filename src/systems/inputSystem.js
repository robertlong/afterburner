var Input = require('../components/Input');

module.exports = function inputSystem(window, canvas) {
	var keys = {};
	var keysDownThisFrame = {};
	var keysUpThisFrame = {};
	var mousePosition = {};
	var mouseButtons = {};
	var mouseButtonsDownThisFrame = {};
	var mouseButtonsUpThisFrame = {};
	var canvasRect = canvas.getBoundingClientRect();
	
	window.addEventListener('keydown', function (e) {
		keys[e.keyCode] = true;
		keysDownThisFrame[e.keyCode] = true;
		delete keysUpThisFrame[e.keyCode];
	});
	
	window.addEventListener('keyup', function (e) {
		keys[e.keyCode] = false;
		keysUpThisFrame[e.keyCode] = true;
		delete keysDownThisFrame[e.keyCode];
	});
	
	window.addEventListener('mousedown', function (e) {
		mouseButtons[0] = true;
		mouseButtonsDownThisFrame[0] = true;
		delete mouseButtonsUpThisFrame[0];
	});
	
	window.addEventListener('mouseup', function (e) {
		mouseButtons[0] = false;
		mouseButtonsUpThisFrame[0] = true;
		delete mouseButtonsDownThisFrame[0];
	});
	
	window.addEventListener('resize', function (e) {
		canvasRect = canvas.getBoundingClientRect();
	});
	
	canvas.addEventListener('mousemove', function (e) {
		mousePosition = {
			x: e.clientX - canvasRect.left,
			y: e.clientY - canvasRect.top
		};
	});
	
	return function processInputs(entities) {
		// Todo handle frame input correctly
		entities.forEach(function (entity) {
			var input = entity.getComponent(Input);
			
			if (!input) {
				return;
			}
			
			input.keys = keys;
			input.keysDownThisFrame = keysDownThisFrame;
			input.keysUpThisFrame = keysUpThisFrame;
			input.mousePosition = mousePosition;
			input.mouseButtons = mouseButtons;
			input.mouseButtonsDownThisFrame = mouseButtonsDownThisFrame;
			input.mouseButtonsUpThisFrame = mouseButtonsUpThisFrame;
		});
	};
};
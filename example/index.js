var renderSystem = require("./systems/renderSystem");
var inputSystem = require("./systems/inputSystem");
var behaviorSystem = require("./systems/behaviorSystem");
var Entity = require('./Entity');
var Position = require('./components/Position');
var Box = require('./components/Box');
var Color= require('./components/Color');
var Rotation = require('./components/Rotation');
var Input = require('./components/Input');
var Behavior = require('./components/Behavior');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


var box = new Entity()
	.addComponent(new Position(100, 100))
	.addComponent(new Color("red"))
	.addComponent(new Box(100, 100))
	.addComponent(new Rotation(30))
	.addComponent(new Input())
	.addComponent(new Behavior({
		name: 'Movement',
		onUpdate: function (components) {
			if(components.Input.getKey(Input.Keys.UP)) {
				components.Position.addVector2D(components.Rotation.getVector2D());
			}
			if(components.Input.getKey(Input.Keys.DOWN)) {
				components.Position.subtractVector2D(components.Rotation.getVector2D());
			}
			if(components.Input.getKey(Input.Keys.LEFT)) {
				components.Rotation.rotation -= 1;
			}
			if(components.Input.getKey(Input.Keys.RIGHT)) {
				components.Rotation.rotation += 1;
			}
		}
	}));

var entities = [box];

var renderCanvas = renderSystem(canvas);
var processInputs = inputSystem(window, canvas);
var processBehaviors = behaviorSystem();

function renderLoop() {
	processInputs(entities);
	processBehaviors(entities);
	renderCanvas(entities);
	window.requestAnimationFrame(renderLoop);	
}

window.requestAnimationFrame(renderLoop);

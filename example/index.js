var renderSystem = require("../src/systems/renderSystem");
var inputSystem = require("../src/systems/inputSystem");
var behaviorSystem = require("../src/systems/behaviorSystem");
var Entity = require('../src/Entity');
var Position = require('../src/components/Position');
var Box = require('../src/components/Box');
var Color= require('../src/components/Color');
var Rotation = require('../src/components/Rotation');
var Input = require('../src/components/Input');
var Behavior = require('../src/components/Behavior');

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

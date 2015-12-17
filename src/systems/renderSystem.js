var Calc = require('../utils/Calc');
var Position = require('../components/Position');
var Box = require('../components/Box');
var Color= require('../components/Color');
var Rotation = require('../components/Rotation');

module.exports = function renderSystem(canvas) {
	var ctx = canvas.getContext("2d");
	
	return function renderCanvas(entities) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		entities.forEach(function (entity) {
			var position = entity.getComponent(Position);
			var color = entity.getComponent(Color);
			var box = entity.getComponent(Box);
			var rotation = entity.getComponent(Rotation);
			
			// Save the state of the context.
			ctx.save();
			
			// If the entity doesn't have renderable components, skip it.
			if (!position) {
				return;
			}
			
			// TODO: render default color.
			if (color) {
				ctx.fillStyle = color.color;	
			}
			
			// Translate the canvas's origin to the center of the box.
			if (box) {
				ctx.translate(position.x + (box.width / 2), position.y + (box.height / 2));	
			}
			
			// Rotate the canvas around the origin.
			if (rotation) {
				ctx.rotate(Calc.deg2Rad(rotation.rotation));	
			}
			
			// Draw the box around the origin.
			if (box) {
				ctx.fillRect(-box.width / 2, -box.height / 2, box.width, box.height);
			}
			
			// Restore from the previously saved state.
			ctx.restore();
		});
	};
};
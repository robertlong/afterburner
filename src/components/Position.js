var Vector2d = require('../utils/Vector2D');

function Position(x, y) {
	this.x = x;
	this.y = y;
}

Position.prototype.getVector2D = function getVector2D() {
	return new Vector2d(this.x, this.y);	
};

Position.prototype.addVector2D = function addVector2D(vector) {
	this.x += vector.x;
	this.y += vector.y;
	return this;
};

Position.prototype.subtractVector2D = function subtractVector2D(vector) {
	this.x -= vector.x;
	this.y -= vector.y;
	return this;
};

Position.prototype.name = "Position";

module.exports = Position;
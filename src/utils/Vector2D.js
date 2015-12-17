function Vector2D(x, y) {
	this.x = x;
	this.y = y;
};

Vector2D.prototype.add = function add(vector) {
	return new Vector2D(this.x + vector.x, this.y + vector.y);
};

Vector2D.prototype.subtract = function subtract(vector) {
	return new Vector2D(this.x - vector.x, this.y - vector.y);
};

module.exports = Vector2D;
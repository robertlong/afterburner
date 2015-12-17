function Rotation(rotation) {
	this.rotation = rotation;
}

Rotation.prototype.getRadians = function getRadians() {
	return this.rotation * (Math.PI / 180);
};

Rotation.prototype.getVector2D = function getVector2D() {
	return {
		x: Math.cos(this.getRadians()),
		y: Math.sin(this.getRadians())
	};
};

Rotation.prototype.name = "Rotation";

module.exports = Rotation;
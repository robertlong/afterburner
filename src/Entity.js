var cuid = require("cuid");

function Entity() {
	this.id = cuid();
	this.components = {};
}

Entity.prototype.addComponent = function addComponent(component) {
	this.components[component.name] = component;
	return this;
};

Entity.prototype.removeComponent = function removeComponent(componentName) {
	delete this.components[componentName];
	return this;
};

Entity.prototype.getComponent = function getComponent(Component) {
	return this.components[Component.prototype.name];
};

module.exports = Entity;
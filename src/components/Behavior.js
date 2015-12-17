function Behavior(behavior) {
	this.name = behavior.name;
	this.isBehavior = true;
	this.onInitialize = behavior.onInitialize;
	this.onUpdate = behavior.onUpdate;
	this.onDestroy = behavior.onDestroy;
}

module.exports = Behavior;
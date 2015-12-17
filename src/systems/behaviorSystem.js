function behaviorSystem() {	
	return function processBehaviors(entities) {
		entities.forEach(function (entity) {
			var behaviors = getBehaviors(entity);
			
			behaviors.forEach(function (behavior) {
				behavior.onUpdate(entity.components);
			});
		});
	};
}

function getBehaviors(entity) {
	return Object.keys(entity.components)
				.reduce(function (arr, componentName) {
					var component = entity.components[componentName];
					
					if (component.isBehavior) {
						arr.push(component);
					}
					
					return arr;
				}, []);
}

module.exports = behaviorSystem;
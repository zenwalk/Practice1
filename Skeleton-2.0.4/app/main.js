define(['require', 'jquery', 'app/myTree', 'app/eventBus'], function(require, $, Tree, bus) {
	'use strict';
	console.log('main');
	bus.on('tree-click', function(data) {
		console.log(data);
	});
	Tree.run();
});

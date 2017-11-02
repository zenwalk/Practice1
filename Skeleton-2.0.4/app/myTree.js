define(['require', 'jquery', 'use!jqTree', 'inspire-tree', 'inspire-tree-dom', 'app/eventBus'], function(
	require,
	$,
	jqTree,
	InspireTree,
	InspireTreeDOM,
	bus
) {
	'use strict';

	function init(params) {
		var tree = new InspireTree({
			data: $.getJSON('app/full.json')
		});
		new InspireTreeDOM(tree, {
			target: '#tree'
        });
        tree.disableDeselection()
		tree.on('node.click', function(event, node) {
			event.preventTreeDefault(); // Cancels default listener
			bus.emit('tree-click', { node: node });
		});
	}

	$(init);

	return {
		run: function() {
			// var tree = createTree('div_tree','white',contex_menu);
			// tree.drawTree();
		}
	};
});

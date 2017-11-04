var dojoConfig = {
	async: true,
	baseUrl: 'http://' + location.host,
	package: ['app'],
	paths: {
		app: 'app',
		jquery: 'https://cdn.bootcss.com/jquery/3.2.1/jquery.min',
		jqTree: 'libs/mbraak-jqTree-9102352/build/tree.jquery',
		lodash: 'https://cdn.bootcss.com/lodash.js/4.17.4/lodash.min',
		'inspire-tree': 'libs/inspire-tree-4.0.0/dist/inspire-tree.min',
		'inspire-tree-dom': 'libs/inspire-tree-dom-master/dist/inspire-tree-dom.min',
		mitt: 'libs/mitt.umd',
		vue: 'https://cdn.bootcss.com/vue/2.4.4/vue.min',
		'vue-qriously': 'libs/vue-qriously'
	},
	map: {
		'*': {
			use: 'app/use',
			$: 'jquery'
		}
	},
	use: {
		jqTree: {
			deps: ['jquery']
		}
	}
};

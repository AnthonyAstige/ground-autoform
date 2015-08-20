'use strict';
/*global Package*/

Package.onUse(function(api) {
	api.versionsFrom('1.1.0.3');
	api.use('standard-app-packages');

	api.use([
		'aldeed:autoform'
	]);

	api.addFiles([
		'ground-autoform.js'
	]);
});

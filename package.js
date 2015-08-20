'use strict';
/*global Package*/

Package.describe({
  summary: 'Makes autoforms behave better when offline',
  version: '0.0.1',
  git: 'https://github.com/AnthonyAstige/ground-autoform',
  name: 'AnthonyAstige:ground-autoform'
});

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

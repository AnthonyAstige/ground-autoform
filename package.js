'use strict';
/*global Package*/

Package.describe({
  summary: 'Makes autoforms behave better when offline',
  version: '0.0.2',
  git: 'https://github.com/AnthonyAstige/ground-autoform',
  name: 'anthonyastige:ground-autoform'
});

Package.onUse(function(api) {
	api.versionsFrom('1.1.0.3');
	api.use('standard-app-packages');

	api.use([
		'aldeed:autoform@5.4.1'
	]);

	api.addFiles([
		'hooks.js'
	]);
});

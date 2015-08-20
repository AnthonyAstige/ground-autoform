'use strict';
/*global Meteor, AutoForm*/

if (Meteor.isClient) {
	/**
	 * Offline functionality as suggested in open AF issue @ https://goo.gl/hRAIsp
	 * * Form resets without waiting for server
	 * * For use with grounddb
	 */
	// TODO: Make work with an insert hook so add type=insert to form (is hacked w/o type)
	AutoForm.addHooks(null, {
		onSubmit: function(insertDoc, updateDoc, currentDoc) {
//			this.collection.insert(insertDoc);
//			this.done();
//			return false;
		}
	});
}
